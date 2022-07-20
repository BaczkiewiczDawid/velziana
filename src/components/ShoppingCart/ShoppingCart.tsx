import { useContext } from "react";
import { ShoppingCartContext } from "context/ShoppingCartContext";
import DishesList from "data/DishesList";
import CartItem from "components/ShoppingCart/CartItem";
import Checkout from "components/ShoppingCart/Checkout";
import {
  Wrapper,
  Container,
  CartItemsWrapper,
} from "components/ShoppingCart/ShoppingCart.style";

type ItemsType = {
  id: number;
  name: string;
  img: string;
  alt: string;
  price: number;
  grammage: number;
  deleteItem: () => {};
};

const ShoppingCart = () => {
  const { shoppingCartItems, deleteItem } = useContext(ShoppingCartContext);

  const itemsList: ItemsType[] = [];

  shoppingCartItems.forEach((el: number) => {
    const foundItem: any = DishesList.find((dish) => dish.id === el);

    itemsList.push(foundItem);
  });

  const sumPrice = (arr: number[]) => {
    const totalPrice: number = arr.reduce((a, b) => a + b, 0);

    return totalPrice;
  };

  const pricesList: number[] = [];

  itemsList.forEach((item) => {
    pricesList.push(item.price);
  });

  const totalPrice: number = sumPrice(pricesList);

  localStorage.setItem('totalPrice', totalPrice.toString());

  return (
    <Container>
      <Wrapper>
        <h1>ShoppingCart</h1>
        <CartItemsWrapper>
          {itemsList.length === 0 ? <p>There's nothing in Your shopping cart</p> : null}
          {itemsList.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img}
                alt={item.alt}
                name={item.name}
                price={item.price}
                deleteItem={deleteItem}
              />
            );
          })}
        </CartItemsWrapper>
      </Wrapper>
      <Checkout totalPrice={totalPrice} />
    </Container>
  );
};

export default ShoppingCart;
