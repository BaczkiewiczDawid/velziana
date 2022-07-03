import styled from 'styled-components';

export const StyledDish = styled.div`
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
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 30vw;
    flex-direction: row;
    flex-wrap: wrap;

    img {
      width: 30vw;
    }

    &:nth-child(n + 2) {
      margin-top: 0;
    }

    padding: 0 1rem;
  }

  @media screen and (min-width: 1080px) {
    width: 20vw;

    img {
        width: 20vw;
    }
}
`;

export const ImgContainer = styled.div`
  width: 90vw;
  height: 30vh;

  @media screen and (min-width: 768px) {
    width: 30vw;
  }

  @media screen and (min-width: 1080px) {
    width: 20vw;
}
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    width: 30vw;
  }

  @media screen and (min-width: 1080px) {
    width: 20vw;
  }
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const Grammage = styled.p`
  font-weight: light;
  margin-left: 1rem;
  font-size: 0.7rem;
`;

export const Button = styled.button`
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