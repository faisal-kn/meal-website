import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        React Meals
        <button> Your Cart</button>
      </div>
      <div className="main-image">
        <img src="/" alt="A pizza image"></img>
      </div>
    </>
  );
};

export default Header;
