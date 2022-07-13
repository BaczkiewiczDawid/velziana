import { OrderWrapper, Info, DateInfo } from "components/Bills/Order.style";
import BillsList from "data/BillsList";
import Dish from "components/Bills/Dish";

type OrderTypes = {
  orderNum: number;
  table: number;
  date: string;
  totalPrice: number;
  dishes: any;
};

type DishType = {
    img: string;
    name: string;
    price: number;
}

const Order = ({ orderNum, table, date, totalPrice, dishes }: OrderTypes) => {
  return (
    <OrderWrapper>
      <Info>
        <h2>Order #{orderNum}</h2>
        <span>Table {table}</span>
      </Info>
      <DateInfo>{date}</DateInfo>
      {dishes.map((dish: DishType) => (
        <Dish img={dish.img} name={dish.name} price={dish.price} />
      ))}
      <Info>
        <h4>Total</h4>
        <p>${totalPrice}</p>
      </Info>
    </OrderWrapper>
  );
};

export default Order;
