import { StyledDish, ImgContainer, Details, Price, Grammage, Button } from 'components/Dashboard/Dish.style';
import { useContext } from "react";
import { ShoppingCartContext } from "context/ShoppingCartContext";

type DishType = {
    id: number,
    img: string,
    alt: string,
    name: string,
    price: number,
    grammage: number,
    onClick: () => {}
}

const Dish = ({ id, img, alt, name, price, grammage, onClick}: DishType) => {
  const { handleShoppingCartItems } = useContext(ShoppingCartContext);

  return (
    <StyledDish key={id} onClick={onClick}>
      <ImgContainer>
        <img src={img} alt={alt} />
      </ImgContainer>
      <p>{name}</p>
      <Details>
        <div>
          <Price>${price}</Price>
          <Grammage>{grammage}g</Grammage>
        </div>
        <Button onClick={() => handleShoppingCartItems(id)}>Add to cart</Button>
      </Details>
    </StyledDish>
  );
};

export default Dish;
