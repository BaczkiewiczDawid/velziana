import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 95vw;
  margin: 1rem auto;
  z-index: 999;

  @media screen and (min-width: 768px) {
    width: 25vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    margin: 0;
    justify-content: flex-start;
    -webkit-box-shadow: 13px -1px 35px -15px rgba(66, 68, 90, 1);
    -moz-box-shadow: 13px -1px 35px -15px rgba(66, 68, 90, 1);
    box-shadow: 13px -1px 35px -15px rgba(66, 68, 90, 1);
  }

  @media screen and (min-width: 1080px) {
    width: 17vw;
}
`;