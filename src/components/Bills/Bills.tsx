import styled from "styled-components";
import useCurrentUser from "hooks/useCurrentUser";
import BillsList from "data/BillsList";
import Dish from "components/Bills/Dish";
import Order from 'components/Bills/Order';

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

const Bills = () => {
  const currentUser = useCurrentUser();

  return (
    <Wrapper>
      {BillsList.map((bill) => (
        <Order
          orderNum={bill.orderNum}
          table={bill.table}
          date={bill.date}
          totalPrice={bill.totalPrice}
          dishes={bill.dishes}
        />
      ))}
    </Wrapper>
  );
};

export default Bills;
