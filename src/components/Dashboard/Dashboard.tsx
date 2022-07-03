import styled from "styled-components";

const DishesList = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90vw;
    margin: 3rem auto;
`;

const Title = styled.h1`
    margin-left: 1.2rem;
`;

const Dish = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;

  &:nth-child(n+2) {
        margin-top: 4rem;
    }

  img {
    object-fit: cover;
    width: 90vw;
    height: 30vh;
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

const Gramature = styled.p`
    font-weight: light;
    margin-left: 1rem;
    font-size: .7rem;
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 2.5rem;
    border-radius: 7px;
    cursor: pointer;
`;

const Dashboard = () => {
  return (
    <>
      <Title>Main dishes</Title>
      <DishesList>
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
              <Gramature>340g</Gramature>
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
              <Gramature>340g</Gramature>
            </div>
            <Button>Add to cart</Button>
          </Details>
        </Dish>
      </DishesList>
    </>
  );
};

export default Dashboard;
