import { NavLinksWrapper } from 'components/Navigation/NavLinks.style';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      <Link to="/">Dishes</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/bills">Bills</Link>
      <Link to="/settings">Settings</Link>
    </NavLinksWrapper>
  );
};

export default NavLinks;