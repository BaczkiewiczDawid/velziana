import { useState, useEffect } from "react";
import useCurrentUser from "hooks/useCurrentUser";
import Axios from "axios";
import Order from "components/Bills/Order";
import { Wrapper } from 'components/Bills/Bills.style';

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

  console.log(list)

  return (
    <Wrapper>
      {list.map((el: any) => {
        return (
          <Order
            orderNum={el.orderID}
            table={el.table}
            date={el.date}
            totalPrice={el.totalPrice}
            dishes={el.dishes}
          />
        );
      })}
    </Wrapper>
  );
};

export default Bills;
