import { useState, useContext } from "react";
import { FormWrapper, Input, Container } from "components/Checkout/Checkout.style";
import Button from "components/ShoppingCart/Button";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "context/ShoppingCartContext";

const Checkout = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    city: "",
  });
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { setShoppingCartItems } = useContext(ShoppingCartContext);

  const handleInputValues = (e: any) => {
    const inputsVal = {
      ...inputValues,
    };

    setInputValues({ ...inputsVal, [e.target.name]: e.target.value });
  };

  const handleNextPage = () => {
    if (page === 1 && (inputValues.firstName === '' || inputValues.lastName === '' || inputValues.email === '' || inputValues.phoneNumber === '')) {
      return;
    }

    if (page === 2 && (inputValues.addressLine1 === '' ||  inputValues.postalCode === '' || inputValues.city === '')) {
      return;
    }

    if (page < 3) {
      setPage(page + 1);
    } else {
      setShoppingCartItems([])
      navigate('/', { replace: true})
    }
  };

  return (
    <>
      <FormWrapper>
        {page === 1 && (
          <>
            <label htmlFor="">First name</label>
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              secondary={false}
              onChange={(e) => handleInputValues(e)}
            />
            <label htmlFor="">Last name</label>
            <Input
              type="text"
              name="lastName"
              placeholder="Last name"
              secondary={false}
              onChange={(e) => handleInputValues(e)}
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
              <input type="date"/>
              <label htmlFor="">Reservation time</label>
              <select name="hours">
                <option value="">8:00 - 10:00</option>
                <option value="">10:00 - 12:00</option>
                <option value="">12:00 - 14:00</option>
                <option value="">14:00 - 16:00</option>
                <option value="">16:00 - 18:00</option>
                <option value="">18:00 - 20:00</option>
                <option value="">20:00 - 22:00</option>
              </select>
            </Container>
          </>
        )}
        <Button text={page === 3 ? 'Make reservation' : 'Next'} onClick={handleNextPage} />
      </FormWrapper>
    </>
  );
};

export default Checkout;
