import { StyledButton } from "components/ShoppingCart/DeleteBtn.style";
import trashIcon from "assets/images/trash.png";

type ButtonProps = {
    onClick: () => {};
}

const DeleteBtn = ({ onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={trashIcon} alt="delete" />
    </StyledButton>
  );
};

export default DeleteBtn;
