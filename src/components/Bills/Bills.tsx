import { useState, useEffect } from "react";
import styled from "styled-components";
import useCurrentUser from "hooks/useCurrentUser";
import BillsList from "data/BillsList";
import Axios from "axios";
import DishesList from "data/DishesList";
import Order from "components/Bills/Order";
import groupArray from "group-array";

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
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/orders-list", {
      data: currentUser,
    }).then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <Wrapper>
      {list.map((el: any) => {
        return (
          <Order
            orderNum={el.orderID}
            table={el.table}
            date={el.date}
            totalPrice={3}
            dishes={el.dishes}
          />
        );
      })}
    </Wrapper>
  );
};

export default Bills;
