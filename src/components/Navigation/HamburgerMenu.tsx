import { useState } from "react";
import Hamburger from "hamburger-react";
import {
  HamburgerWrapper,
  NavigationContent,
} from "components/Navigation/HamburgerMenu.style";
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerWrapper>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </HamburgerWrapper>
      {isOpen && (
        <NavigationContent>
          <Link to="/">Dishes</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/bills">Bills</Link>
          <Link to="/settings">Settings</Link>
        </NavigationContent>
      )}
    </>
  );
};

export default HamburgerMenu;
