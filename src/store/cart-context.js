import React from 'react';

//This returns a object which contains the component
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
