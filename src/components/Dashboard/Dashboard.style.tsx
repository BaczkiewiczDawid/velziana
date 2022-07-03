import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DishesListContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90vw;
  margin: 3rem auto;

  @media screen and (min-width: 768px) {
    width: 70vw;
    margin: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 30vw;
  }

  @media screen and (min-width: 1080px) {
    margin-left: 23vw;
}
`;

export const Title = styled.h1`
  margin-left: 1.2rem;

  @media screen and (min-width: 768px) {
    margin-left: 30vw;
  }

  @media screen and (min-width: 1080px) {
    margin-left: 23vw;
}
`;

