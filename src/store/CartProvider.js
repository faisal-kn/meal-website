import React from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const selectedItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    if (selectedItemIndex !== -1) {
      const selectedItem = state.items[selectedItemIndex];
      const updatedItem = {
        ...selectedItem,
        amount: selectedItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[selectedItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedAmount };
  }

  if (action.type === 'REMOVE') {
    const selectedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let updatedItems;
    const selectedItem = state.items[selectedItemIndex];
    if (selectedItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...selectedItem,
        amount: selectedItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[selectedItemIndex] = updatedItem;
    }
    const updatedAmount = state.totalAmount - selectedItem.price;
    return { items: updatedItems, totalAmount: updatedAmount };
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

  const removeItemHandler = (id) => {
    dispatchCartState({ type: 'REMOVE', id: id });
  };
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
