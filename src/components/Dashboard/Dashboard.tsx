import DishesList from "data/DishesList";
import Dish from "components/Dashboard/Dish";
import {
  Wrapper,
  Title,
  DishesListContainer,
} from "components/Dashboard/Dashboard.style";

const Dashboard = () => {
  return (
    <Wrapper>
      <Title>Main dishes</Title>
      <DishesListContainer>
        {DishesList.map((dish) => (
          <Dish
            key={dish.id}
            id={dish.id}
            img={dish.img}
            alt={dish.alt}
            name={dish.name}
            price={dish.price}
            grammage={dish.grammage}
          />
        ))}
      </DishesListContainer>
    </Wrapper>
  );
};

export default Dashboard;
