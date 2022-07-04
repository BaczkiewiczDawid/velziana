import { StyledDish, ImgContainer, Details, Price, Grammage, Button } from 'components/Dashboard/Dish.style';

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
        <Button>Add to cart</Button>
      </Details>
    </StyledDish>
  );
};

export default Dish;
