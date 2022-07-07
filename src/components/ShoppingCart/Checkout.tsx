import { useNavigate } from "react-router-dom";
import {
  CheckoutWrapper,
} from "components/ShoppingCart/Checkout.style";
import Button from 'components/ShoppingCart/Button';

type Props = {
  totalPrice: number;
};

const Checkout = ({ totalPrice }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (totalPrice <= 0) {
      return;
    }

    navigate("/checkout", { replace: true });
  };

  return (
    <CheckoutWrapper>
      <div>
        <h3>Total</h3>
        <span>${totalPrice}</span>
      </div>
      <Button onClick={handleNavigate} text="Order now!" />
    </CheckoutWrapper>
  );
};

export default Checkout;
