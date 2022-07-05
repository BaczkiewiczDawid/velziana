import {
  ItemWrapper,
  ImgWrapper,
  Details,
} from "components/ShoppingCart/CartItem.style";

type Item = {
  img: string;
  alt: string;
  name: string;
  price: number;
};

const CartItem = ({ img, alt, name, price }: Item) => {
  return (
    <ItemWrapper>
      <ImgWrapper>
        <img src={img} alt={alt} />
      </ImgWrapper>
      <Details>
        <h2>{name}</h2>
        <p>${price}</p>
      </Details>
    </ItemWrapper>
  );
};

export default CartItem;
