import { StyledButton } from "components/ShoppingCart/Button.style";

type ButtonProps = {
  text: string;
  onClick: () => {} | void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick} type="button">{text}</StyledButton>;
};

export default Button;
