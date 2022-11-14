import React from 'react';

import './Header.css';
// import Button from '../UI/Button';
import mealsImage from '../../assets/meals.jpg';
import CartIcon from '../cart/CartIcon';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';

const Header = () => {
  //This gives context values . The header component will be reevaluated by react whenever context changes.
  const ctx = React.useContext(CartContext);
  const numberCartItems = ctx.items.reduce(
    (curNum, item) => curNum + item.amount,
    0
  );

  return (
    <>
      <div className="header">
        <h1>React Meals</h1>
        <Link to="/cart" className="button">
          <span className="icon">
            <CartIcon />
          </span>
          Your Cart
          <span className="badge">{numberCartItems}</span>
        </Link>
      </div>
      <div className="main-image">
        <img src={mealsImage} alt="A pizza"></img>
      </div>
    </>
  );
};

export default Header;
