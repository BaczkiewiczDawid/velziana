import styled from "styled-components";
import useCurrentUser from "hooks/useCurrentUser";

const Wrapper = styled.section`
display: flex;
flex-direction: column;
    margin: 2rem auto;
    width: 90vw;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0;
        width: 70vw;
        margin-left: 30vw;
        margin-top: 2rem;
    }
`;

const OrderWrapper = styled.article`
    min-height: 20rem;
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
    padding: 0 1rem;

    &:nth-child(n+2) {
        margin-top: 5rem;
    }

    @media screen and (min-width: 768px) {
        width: 14rem;
        padding: 0 2rem;

        &:nth-child(n+2) {
            margin-top: 0;
            margin-left: 3rem;
        }
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
`;

const DateInfo = styled.p`
    margin: 0;
`;

const DishWrapper = styled.div`
    display: flex;
    margin-top: 1rem;

    img {
        width: 30vw;
        height: auto;
    }

    div {
        margin-left: 1.5rem;

        p {
            font-weight: 300;
        }
    }

    @media screen and (min-width: 768px) {
        img {
            width: 40%;
        }
    }
`;

const Bills = () => {
  const currentUser = useCurrentUser();

  return (
    <Wrapper>
      <OrderWrapper>
        <Info>
          <h2>Order #32</h2>
          <span>Table 3</span>
        </Info>
        <DateInfo>Sep 12, 2022 Sun 12:43PM</DateInfo>
        <DishWrapper>
            <img src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            <div>
                <h3>Spaghetti bolonese</h3>
                <p>$42</p>
            </div>
        </DishWrapper>
        <DishWrapper>
            <img src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            <div>
                <h3>Spaghetti bolonese</h3>
                <p>$42</p>
            </div>
        </DishWrapper>
        <Info>
            <h4>Total</h4>
            <p>$84</p>
        </Info>
      </OrderWrapper>
      <OrderWrapper>
        <Info>
          <h2>Order #32</h2>
          <span>Table 3</span>
        </Info>
        <DateInfo>Sep 12, 2022 Sun 12:43PM</DateInfo>
        <DishWrapper>
            <img src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            <div>
                <h3>Spaghetti bolonese</h3>
                <p>$42</p>
            </div>
        </DishWrapper>
        <DishWrapper>
            <img src="https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            <div>
                <h3>Spaghetti bolonese</h3>
                <p>$42</p>
            </div>
        </DishWrapper>
        <Info>
            <h4>Total</h4>
            <p>$84</p>
        </Info>
      </OrderWrapper>
    </Wrapper>
  );
};

export default Bills;
