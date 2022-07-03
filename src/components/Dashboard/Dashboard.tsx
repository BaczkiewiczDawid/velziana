import styled from "styled-components";
import DishesList from "data/DishesList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DishesListContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90vw;
  margin: 3rem auto;

  @media screen and (min-width: 768px) {
    width: 60vw;
    margin: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 30vw;
  }
`;

const Title = styled.h1`
  margin-left: 1.2rem;

  @media screen and (min-width: 768px) {
    margin-left: 30vw;
  }
`;

const Dish = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;

  &:nth-child(n + 2) {
    margin-top: 4rem;
  }

  img {
    object-fit: cover;
    width: 90vw;
    height: 30vh;
  }

  @media screen and (min-width: 768px) {
    width: 20vw;
    flex-direction: row;
    flex-wrap: wrap;

    img {
      width: 30vw;
    }

    &:nth-child(n + 2) {
      margin-top: 0;
    }

    &:nth-child(even) {
      margin-left: 4rem;
    }
  }
`;

const ImgContainer = styled.div`
  width: 90vw;
  height: 30vh;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
`;

const Grammage = styled.p`
  font-weight: light;
  margin-left: 1rem;
  font-size: 0.7rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2.5rem;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkOrange};
    transition: 0.2s;
  }

  @media screen and (min-width: 768px) {
    padding: 0.7rem 1.2rem;
  }
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Title>Main dishes</Title>
      <DishesListContainer>
        {DishesList.map((dish) => (
          <Dish key={dish.id}>
            <ImgContainer>
              <img src={dish.img} alt={dish.alt} />
            </ImgContainer>
            <p>{dish.name}</p>
            <Details>
              <div>
                <Price>${dish.price}</Price>
                <Grammage>{dish.grammage}g</Grammage>
              </div>
              <Button>Add to cart</Button>
            </Details>
          </Dish>
        ))}
        {/* <Dish>
          <ImgContainer>
            <img
              src="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt=""
            />
          </ImgContainer>
          <p>Spaghetti bolonese with grilled cheese</p>
          <Details>
            <div>
              <Price>$23</Price>
              <Grammage>340g</Grammage>
            </div>
            <Button>Add to cart</Button>
          </Details>
        </Dish>
        <Dish>
          <ImgContainer>
            <img
              src="https://images.unsplash.com/photo-1567423285116-c31e6a93e939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt=""
            />
          </ImgContainer>
          <p>Spaghetti bolonese with grilled cheese</p>
          <Details>
            <div>
              <Price>$23</Price>
              <Grammage>340g</Grammage>
            </div>
            <Button>Add to cart</Button>
          </Details>
        </Dish> */}
      </DishesListContainer>
    </Wrapper>
  );
};

export default Dashboard;
