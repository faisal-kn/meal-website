import React from 'react';

import './MealItemForm.css';

const MealItemForm = (props) => {
  const amountInputRef = React.useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    props.onCart(enteredAmount);
  };

  return (
    <form className="form input" onSubmit={formSubmitHandler}>
      <label htmlFor="items">Amount</label>
      <input
        ref={amountInputRef}
        type="number"
        id="items"
        min="1"
        max="5"
        placeholder="1"
        step="1"
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
