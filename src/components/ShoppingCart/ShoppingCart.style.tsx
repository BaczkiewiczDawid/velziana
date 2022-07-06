import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90vw;

  h1 {
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    width: 65vw;
    margin-left: 33vw;
    margin-top: 2rem;

    h1 {
      font-size: 1.75rem;
    }
  }
`;

export const CartItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Container = styled.div`
  position: relative;
`;