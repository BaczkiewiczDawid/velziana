import {
  ItemWrapper,
  ImgWrapper,
  Details,
  Container
} from "components/ShoppingCart/CartItem.style";
import DeleteBtn from "components/ShoppingCart/DeleteBtn";

type Item = {
  id: number;
  img: string;
  alt: string;
  name: string;
  price: number;
  deleteItem: (id: number) => {}
};

const CartItem = ({ id, img, alt, name, price, deleteItem }: Item) => {
  return (
    <ItemWrapper>
      <ImgWrapper>
        <img src={img} alt={alt} />
      </ImgWrapper>
      <Details>
        <h2>{name}</h2>
        <Container>
          <p>${price}</p>
          <DeleteBtn onClick={() => deleteItem(id)} />
        </Container>
      </Details>
    </ItemWrapper>
  );
};

export default CartItem;
