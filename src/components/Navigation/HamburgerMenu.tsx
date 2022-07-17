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
          <Link to="/" onClick={() => setIsOpen(false)}>Dishes</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/bills" onClick={() => setIsOpen(false)}>Bills</Link>
          <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
        </NavigationContent>
      )}
    </>
  );
};

export default HamburgerMenu;
