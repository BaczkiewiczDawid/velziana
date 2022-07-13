import { DishWrapper, ImgWrapper, DishInfo } from "components/Bills/Dish.style";

type DishTypes = {
  img: string;
  name: string;
  price: number;
};

const Dish = ({ img, name, price }: DishTypes) => {
  return (
    <DishWrapper>
      <ImgWrapper>
        <img src={img} alt="" />
      </ImgWrapper>
      <DishInfo>
        <h3>{name}</h3>
        <p>${price}</p>
      </DishInfo>
    </DishWrapper>
  );
};

export default Dish;
