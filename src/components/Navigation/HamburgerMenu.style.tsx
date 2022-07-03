import styled, { keyframes } from 'styled-components';

const slide = keyframes`
    0% {
        width: 20vw;
    }

    100% {
        width: 70vw;
    }
`;

export const HamburgerWrapper = styled.div`
  z-index: 999;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavigationContent = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  width: 70vw;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: -5px 9px 36px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: -5px 9px 36px -7px rgba(66, 68, 90, 1);
  box-shadow: -5px 9px 36px -7px rgba(66, 68, 90, 1);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${slide} 0.2s linear;

  a {
    padding: 1rem 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;
