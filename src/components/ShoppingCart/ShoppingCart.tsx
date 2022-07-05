import styled from "styled-components";
import { useContext } from "react";
import { ShoppingCartContext } from "context/ShoppingCartContext";
import DishesList from "data/DishesList";
import CartItem from "components/ShoppingCart/CartItem";
import Checkout from "components/ShoppingCart/Checkout";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90vw;

  h1 {
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    width: 65vw;
    margin-left: 33vw;
    margin-top: 2rem;

    h1 {
      font-size: 1.75rem;
    }
  }
`;

const CartItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Container = styled.div`
  position: relative;
`;

type ItemsType = {
  id: number;
  name: string;
  img: string;
  alt: string;
  price: number;
  grammage: number;
};

const ShoppingCart = () => {
  const { shoppingCartItems } = useContext(ShoppingCartContext);

  const itemsList: ItemsType[] = [];

  shoppingCartItems.forEach((el: number) => {
    const foundItem: any = DishesList.find((dish) => dish.id === el);

    itemsList.push(foundItem);
  });

  const sumPrice = (arr: number[]) => {
    const totalPrice: number = arr.reduce((a, b) => a + b, 0);
    
    return totalPrice
  }

  const pricesList: number[] = [];

  itemsList.forEach((item) => {
      pricesList.push(item.price);
  })

  const totalPrice: number = sumPrice(pricesList);

  return (
    <Container>
      <Wrapper>
        <h1>ShoppingCart</h1>
        <CartItemsWrapper>
          {itemsList.map((item) => {
            return (
              <CartItem
                key={item.id}
                img={item.img}
                alt={item.alt}
                name={item.name}
                price={item.price}
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
