import React from 'react';

import './MealItemForm.css';

const MealItemForm = () => {
  return (
    <form className="form input">
      <label htmlFor="items">Amount</label>
      <input type="number" id="items" />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
