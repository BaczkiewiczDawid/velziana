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