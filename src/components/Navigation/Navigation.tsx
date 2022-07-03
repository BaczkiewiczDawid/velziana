import Logo from 'components/Navigation/Logo';
import HamburgerMenu from "components/Navigation/HamburgerMenu";
import NavLinks from 'components/Navigation/NavLinks';
import { Nav } from 'components/Navigation/Navigation.style';

const Navigation = () => {
  return (
    <Nav>
      <Logo />
      <HamburgerMenu />
      <NavLinks />
    </Nav>
  );
};

export default Navigation;
