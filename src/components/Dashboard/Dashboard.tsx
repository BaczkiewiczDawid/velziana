import DishesList from "data/DishesList";
import Dish from "components/Dashboard/Dish";
import {
  Wrapper,
  Title,
  DishesListContainer,
} from "components/Dashboard/Dashboard.style";
import { useContext } from "react";
import { ShoppingCartContext } from "context/ShoppingCartContext";
import Modal from 'components/Modal/Modal';

const Dashboard = () => {
  const { handleOpen, isModalOpen } = useContext(ShoppingCartContext);

  return (
    <Wrapper>
      {isModalOpen && <Modal message="Can't add more than 3 dishes" isSuccess={false} />}
      <Title>Main dishes</Title>
      <DishesListContainer>
        {DishesList.map((dish) => (
          <Dish
            onClick={handleOpen}
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
