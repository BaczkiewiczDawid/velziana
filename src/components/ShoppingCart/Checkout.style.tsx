import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5rem auto;
  width: 100vw;
  min-height: 20vh;
  color: ${({ theme }) => theme.colors.black};
  padding: 1rem;

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: auto;
    margin-left: 32vw;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  width: 90vw;
  padding: 1rem;
  background-color: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    transition: 0.2s;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 1rem 4rem;
  }
`;