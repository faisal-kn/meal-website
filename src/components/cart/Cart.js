import React from 'react';

import './Cart.css';
import Modal from '../UI/Modal';
import cartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = React.useContext(cartContext);

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={removeHandler.bind(null, item.id)}
          onAdd={addHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onModalClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{`$ ${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onModalClose}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
