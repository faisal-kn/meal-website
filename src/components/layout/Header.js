import React from 'react';

import './Header.css';
// import Button from '../UI/Button';
import mealsImage from '../../assets/meals.jpg';
import CartIcon from '../cart/CartIcon';
import CartContext from '../../store/cart-context';

const Header = (props) => {
  //This gives context values . The header component will be reevaluated by react whenever context changes.
  const ctx = React.useContext(CartContext);
  const numberCartItems = ctx.items.reduce(
    (curNum, item) => curNum + item.amount,
    0
  );
  const buttonHandler = () => {
    console.log(2);
    props.onModalShow();
  };

  return (
    <>
      <div className="header">
        <h1>React Meals</h1>
        <button className="button" onClick={buttonHandler}>
          <span className="icon">
            <CartIcon />
          </span>
          Your Cart
          <span className="badge">{numberCartItems}</span>
        </button>
      </div>
      <div className="main-image">
        <img src={mealsImage} alt="A pizza"></img>
      </div>
    </>
  );
};

export default Header;
