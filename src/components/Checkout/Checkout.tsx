import { useState } from "react";
import { FormWrapper, Input } from "components/Checkout/Checkout.style";
import Button from "components/ShoppingCart/Button";

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

  const handleInputValues = (e: any) => {
    const inputsVal = {
      ...inputValues,
    };

    setInputValues({ ...inputsVal, [e.target.name]: e.target.value });
  };

  console.log(inputValues);

  const handleNextPage = () => {
    setPage(page + 1);
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
            <h2>Select table</h2>
          </>
        )}
        <Button text="Next" onClick={handleNextPage} />
      </FormWrapper>
    </>
  );
};

export default Checkout;
