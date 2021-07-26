import React from 'react';

import './Header.css';
import Button from '../UI/Button';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <>
      <div className="header">
        <h1>React Meals</h1>
        <Button value="Your Cart" items="0"></Button>
      </div>
      <div className="main-image">
        <img src={mealsImage} alt="A pizza"></img>
      </div>
    </>
  );
};

export default Header;
