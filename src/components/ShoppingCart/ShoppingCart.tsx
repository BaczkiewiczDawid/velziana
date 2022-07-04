import styled from "styled-components";

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

const CartItem = styled.article`
  display: flex;

  &:nth-child(n + 2) {
    margin-top: 4rem;
  }
`;

const Details = styled.div`
  margin-left: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.black};
    margin-top: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const ImgWrapper = styled.div`
  img {
    width: 40vw;
    height: 24vh;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 17vw;
      height: 17vh;
    }
  }
`;

const Container = styled.div`
  position: relative;
`;

const Checkout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5rem auto;
  width: 100vw;
  min-height: 20vh;
  color: ${({ theme }) => theme.colors.black};
  padding: 1rem;

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: auto;
    margin-left: 32vw;
    background-color: transparent;
  }
`;

const Button = styled.button`
  width: 90vw;
  padding: 1rem;
  background-color: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    transition: .2s;
      background-color: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.white};
      border: none;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 1rem 4rem;
  }
`;

const ShoppingCart = () => {
  return (
    <Container>
      <Wrapper>
        <h1>ShoppingCart</h1>
        <CartItemsWrapper>
          <CartItem>
            <ImgWrapper>
              <img
                src="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt=""
              />
            </ImgWrapper>
            <Details>
              <h2>Name</h2>
              <p>Price</p>
            </Details>
          </CartItem>
          <CartItem>
            <ImgWrapper>
              <img
                src="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt=""
              />
            </ImgWrapper>
            <Details>
              <h2>Name</h2>
              <p>Price</p>
            </Details>
          </CartItem>
        </CartItemsWrapper>
      </Wrapper>
      <Checkout>
        <div>
          <h3>Total</h3>
          <span>$122</span>
        </div>
        <Button>Order now!</Button>
      </Checkout>
    </Container>
  );
};

export default ShoppingCart;
