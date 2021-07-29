import React from 'react';

import './MealItem.css';
import MealItemForm from './MealItemForm';
import cartContext from '../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = React.useContext(cartContext);
  const onCartHandler = (amount) => {
    cartCtx.addItems({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  const price = `$ ${props.price}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className="description">{props.description}</div>
      <div className="price">{price}</div>
      <div className="form">
        <MealItemForm onCart={onCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
