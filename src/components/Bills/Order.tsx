import { OrderWrapper, Info, DateInfo } from "components/Bills/Order.style";
import DishesList from "data/DishesList";
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
};

const Order = ({ orderNum, table, date, totalPrice, dishes }: OrderTypes) => {
  const dishesArray: any[] = [];

  dishes.map((dish: any) => {
    const itemID: number = dish.itemID;

    dishesArray.push(DishesList.find((el) => el.id === itemID));
  });

  return (
    <OrderWrapper>
      <Info>
        <h2>Order #{orderNum}</h2>
        <span>Table {table}</span>
      </Info>
      <DateInfo>{date}</DateInfo>
      {dishesArray.map((dish: DishType) => (
        <Dish img={dish.img} name={dish.name} price={dish.price} />
      ))}
      <Info>
        <h4>Total</h4>
        <p>${dishes[0].totalPrice}</p>
      </Info>
    </OrderWrapper>
  );
};

export default Order;
