import styled from 'styled-components';

export const OrderWrapper = styled.article`
  min-height: 20rem;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  padding: 1rem 2rem;

  &:nth-child(n + 2) {
    margin-top: 5rem;
  }

  @media screen and (min-width: 1080px) {
    width: 17rem;
    padding: 0 2rem;
    margin-right: 3rem;

    &:nth-child(n + 2) {
      margin-top: 0;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
`;

export const DateInfo = styled.p`
  margin: 0;
`;