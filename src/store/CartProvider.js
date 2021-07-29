import React from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItem = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItem, totalAmount: updatedAmount };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = React.useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartState({ type: 'ADD', item: item });
  };

  const removeItemHandler = (id) => {};
  const contextHelper = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={contextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
