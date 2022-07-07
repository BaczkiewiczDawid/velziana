import { useState } from "react";
import { FormWrapper, Input } from "components/Checkout/Checkout.style";
import Button from "components/ShoppingCart/Button";

const Checkout = () => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    city: '',
  })
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <FormWrapper>
        {page === 1 && (
          <>
            <label htmlFor="">First name</label>
            <Input type="text" placeholder="First name" secondary={false} />
            <label htmlFor="">Last name</label>
            <Input type="text" placeholder="Last name" secondary={false} />
            <label htmlFor="">E-Mail</label>
            <Input type="text" placeholder="E-Mail" secondary={false} />
            <label htmlFor="">Phone number</label>
            <Input type="phone" placeholder="Phone number" secondary={true} />
          </>
        )}
        {page === 2 ? (
          <>
            <label htmlFor="">Address line 1</label>
            <Input type="text" placeholder="Address line 1" secondary={false} />
            <label htmlFor="">Address line 2</label>
            <Input type="text" placeholder="Address line 2" secondary={false} />
            <label htmlFor="">Postal code</label>
            <Input type="number" placeholder="Postal code" secondary={false} />
            <label htmlFor="">City</label>
            <Input type="text" placeholder="City" secondary={true} />
          </>
        ) : null}
        <Button text="Next" onClick={(handleNextPage)} />
      </FormWrapper>
    </>
  );
};

export default Checkout;
