import { useState } from "react";
import Hamburger from "hamburger-react";
import { HamburgerWrapper, NavigationContent } from "components/Navigation/HamburgerMenu.style";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default HamburgerMenu;
