import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};
  const contextHelper = {
    items: [],
    totalAmount: 0,
    addItems: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={contextHelper}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
