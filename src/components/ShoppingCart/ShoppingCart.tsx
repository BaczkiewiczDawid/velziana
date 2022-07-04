import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90vw;

  h1 {
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    width: 65vw;
    margin-left: 16rem;
  }
`;

const CartItemsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const CartItem = styled.article`
  display: flex;
`;

const Details = styled.div`
    margin-left: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.black};
    margin-top: .5rem;
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
`;

const ShoppingCart = () => {
  return (
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
      </CartItemsWrapper>
    </Wrapper>
  );
};

export default ShoppingCart;
