import { CheckoutWrapper, Button } from 'components/ShoppingCart/Checkout.style';

type Props = {
    totalPrice: number
}

const Checkout = ({ totalPrice }: Props) => {
  return (
    <CheckoutWrapper>
      <div>
        <h3>Total</h3>
        <span>${totalPrice}</span>
      </div>
      <Button>Order now!</Button>
    </CheckoutWrapper>
  );
};

export default Checkout;
