import { useState, useContext, useEffect } from "react";
import {
  FormWrapper,
  Input,
  Container,
} from "components/Checkout/Checkout.style";
import Button from "components/ShoppingCart/Button";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "context/ShoppingCartContext";
import Axios from "axios";
import Modal from "components/Modal/Modal";

const Checkout = () => {
  type ResponseType = {
    isReserved: boolean | null;
  };

  type InputType = {
    fullName: string,
    email: string,
    phoneNumber: string,
    addressLine1: string | number,
    addressLine2: string | number,
    postalCode: string,
    city: string,
    date: String | Date,
    time: string,
    table: number
  }

  const name = localStorage.getItem("currentUser");

  const today = new Date();

  const [inputValues, setInputValues] = useState<InputType>({
    fullName: name!,
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    city: "",
    date: today,
    time: "8:00 - 10:00",
    table: 1
  });
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState<ResponseType>({
    isReserved: null,
  });
  const navigate = useNavigate();

  const { setShoppingCartItems, shoppingCartItems } = useContext(ShoppingCartContext);

  const handleInputValues = (e: any) => {
    const inputsVal = {
      ...inputValues,
    };

    setInputValues({ ...inputsVal, [e.target.name]: e.target.value });
  };

  const handleNextPage = () => {
    if (
      page === 1 &&
      (inputValues.fullName === "" ||
        inputValues.email === "" ||
        inputValues.phoneNumber === "")
    ) {
      return;
    }

    if (
      page === 2 &&
      (inputValues.addressLine1 === "" ||
        inputValues.postalCode === "" ||
        inputValues.city === "")
    ) {
      return;
    }

    if (page < 3) {
      setPage(page + 1);
    } else {
      handleReservation();
      setShoppingCartItems([]);
    }
  };

  const handleNewOrder = () => {
    const data = {
      id: shoppingCartItems,
      orderID: Math.floor(Math.random() * 1000000),
      client: 'Dawid Bączkiewicz',
    }
    
    Axios.post('http://localhost:3001/new-order', {
      data: data,
    })
    .then((response) => {
      console.log(response);
    })
  }

  const handleReservation = () => {
    const data = {
      date: inputValues.date,
      time: inputValues.time,
      table: inputValues.table,
    };

    Axios.post("http://localhost:3001/reservation", {
      data: data,
    })
      .then((response) => {
        setResponse({
          isReserved: response.data === 'Already reserved' ? true : false,
        })

        if (response.data !== 'Already reserved') {
          handleNewOrder();
        }
      })
      .catch((err) => {
        console.log(err);
    });
  };

  useEffect(() => {
    if (response?.isReserved === false) {
      navigate("/", { replace: true });
    }
  }, [response, navigate]);

  return (
    <>
      {response.isReserved && page === 3 ? (
        <Modal message="Already reserved" isSuccess={false} />
      ) : null}
      <FormWrapper>
        {page === 1 && (
          <>
            <label htmlFor="">Full name</label>
            <Input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={name?.toString()}
              secondary={false}
              onChange={(e) => handleInputValues(e)}
              disabled
            />
            <label htmlFor="">E-Mail</label>
            <Input
              type="text"
              name="email"
              placeholder="E-Mail"
              secondary={false}
              onChange={(e) => handleInputValues(e)}
            />
            <label htmlFor="">Phone number</label>
            <Input
              type="phone"
              name="phoneNumber"
              placeholder="Phone number"
              secondary={true}
              onChange={(e) => handleInputValues(e)}
            />
          </>
        )}
        {page === 2 && (
          <>
            <label htmlFor="">Address line 1</label>
            <Input
              type="text"
              name="addressLine1"
              placeholder="Address line 1"
              secondary={false}
              onChange={(e) => handleInputValues(e)}
            />
            <label htmlFor="">Address line 2</label>
            <Input
              type="text"
              name="addressLine2"
              placeholder="Address line 2"
              secondary={false}
              onChange={(e) => handleInputValues(e)}
            />
            <label htmlFor="">Postal code</label>
            <Input
              type="number"
              name="postalCode"
              placeholder="Postal code"
              secondary={false}
              onChange={(e) => handleInputValues(e)}
            />
            <label htmlFor="">City</label>
            <Input
              type="text"
              name="city"
              placeholder="City"
              secondary={true}
              onChange={(e) => handleInputValues(e)}
            />
          </>
        )}
        {page === 3 && (
          <>
            <h1>Almost done!</h1>
            <Container>
              <label htmlFor="">Date</label>
              <input
                type="date"
                name="date"
                onChange={(e) => handleInputValues(e)}
              />
              <label>Reservation time</label>
              <select name="time" onChange={(e) => handleInputValues(e)}>
                <option value="8:00 - 10:00">8:00 - 10:00</option>
                <option value="10:00 - 12:00">10:00 - 12:00</option>
                <option value="12:00 - 14:00">12:00 - 14:00</option>
                <option value="14:00 - 16:00">14:00 - 16:00</option>
                <option value="16:00 - 18:00">16:00 - 18:00</option>
                <option value="18:00 - 20:00">18:00 - 20:00</option>
                <option value="20:00 - 22:00">20:00 - 22:00</option>
              </select>
              <label>Table</label>
              <select name="table" onChange={(e) => handleInputValues(e)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </Container>
          </>
        )}
        <Button
          text={page === 3 ? "Make reservation" : "Next"}
          onClick={handleNextPage}
        />
      </FormWrapper>
    </>
  );
};

export default Checkout;
