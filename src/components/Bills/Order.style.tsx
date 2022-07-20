import styled from 'styled-components';

type InfoType = {
  secondary?: boolean;
}

export const DishesWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const OrderWrapper = styled.article`
  min-height: 25rem;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  box-shadow: -7px 12px 27px -7px rgba(66, 68, 90, 1);
  padding: 1rem 2rem;
  position: relative;

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

export const Info = styled.div<InfoType>`
  position: ${props => props.secondary ? 'absolute' : 'relative'};
  bottom: ${props => props.secondary ? '1rem' : '0'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;

  p {
    margin-left: ${props => props.secondary ? '2rem' : '0'};
  }
`;

export const DateInfo = styled.p`
  margin: 0;
`;