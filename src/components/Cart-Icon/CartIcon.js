import { useContext } from 'react';

import { CartContext } from '../../context/cart-context';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles.js';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
