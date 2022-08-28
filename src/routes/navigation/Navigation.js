import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../context/user-context';
import { CartContext } from '../../context/cart-context';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/Cart-Icon/CartIcon';
import CartDropdown from '../../components/Cart-Dropdown/CartDropdown';

import { signOutUser } from '../../utils/firebase/firebase';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './Navigation.styles.js';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' to='/auth' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SING IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
