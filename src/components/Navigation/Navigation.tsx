import { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "assets/images/logo.png";
import Hamburger from "hamburger-react";

const slide = keyframes`
    0% {
        width: 20vw;
    }

    100% {
        width: 70vw;
    }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 95vw;
  margin: 1rem auto;

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
`;

const Logo = styled.img`
  width: 7rem;
  height: auto;

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const NavigationContent = styled.nav`
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

const HamburgerWrapper = styled.div`
  z-index: 999;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 1rem;

    a {
      color: ${({ theme }) => theme.colors.black};
      text-decoration: none;
      padding: 1rem 2rem;
    }
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo src={logo} alt="" />
      <HamburgerWrapper>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </HamburgerWrapper>
      {isOpen && (
        <NavigationContent>
          <a href="">Link1</a>
          <a href="">Link1</a>
          <a href="">Link1</a>
        </NavigationContent>
      )}
      <NavLinks>
        <a href="">Link1</a>
        <a href="">Link2</a>
        <a href="">Link3</a>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
