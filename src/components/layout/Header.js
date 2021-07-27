import React from 'react';

import './Header.css';
// import Button from '../UI/Button';
import mealsImage from '../../assets/meals.jpg';
import CartIcon from '../cart/CartIcon';

const Header = (props) => {
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
          <span className="badge">0</span>
        </button>
      </div>
      <div className="main-image">
        <img src={mealsImage} alt="A pizza"></img>
      </div>
    </>
  );
};

export default Header;
