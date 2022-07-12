import styled from "styled-components";
import useCurrentUser from "hooks/useCurrentUser";
import BillsList from "data/BillsList";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 90vw;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    margin: 0;
    width: 65vw;
    margin-left: 30vw;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1080px) {
    width: 80vw;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 23vw;
  }
`;

const OrderWrapper = styled.article`
  min-height: 20rem;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  padding: 0 1rem;

  &:nth-child(n + 2) {
    margin-top: 5rem;
  }

  @media screen and (min-width: 1080px) {
    width: 17rem;
    padding: 0 2rem;
    margin-right: 3rem;

    &:nth-child(n+2) {
      margin-top: 0;
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

const DishInfo = styled.div`
  margin-left: 1.5rem;

  p {
    font-weight: 300;
  }
`;

const ImgWrapper = styled.div`
  width: 5rem;
  height: 5rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const DishWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`;

const Bills = () => {
  const currentUser = useCurrentUser();

  return (
    <Wrapper>
      {BillsList.map((bill) => (
        <OrderWrapper>
          <Info>
            <h2>Order #{bill.orderNum}</h2>
            <span>Table {bill.table}</span>
          </Info>
          <DateInfo>{bill.date}</DateInfo>
          {bill.dishes.map((dish) => (
            <DishWrapper>
              <ImgWrapper>
                <img src={dish.img} alt="" />
              </ImgWrapper>
              <DishInfo>
                <h3>{dish.name}</h3>
                <p>${dish.price}</p>
              </DishInfo>
            </DishWrapper>
          ))}
          <Info>
            <h4>Total</h4>
            <p>${bill.totalPrice}</p>
          </Info>
        </OrderWrapper>
      ))}
    </Wrapper>
  );
};

export default Bills;
