import { CheckoutWrapper, Button } from 'components/ShoppingCart/Checkout.style';

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <div>
        <h3>Total</h3>
        <span>$122</span>
      </div>
      <Button>Order now!</Button>
    </CheckoutWrapper>
  );
};

export default Checkout;
