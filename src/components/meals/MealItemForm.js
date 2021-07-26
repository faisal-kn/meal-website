import React from 'react';

import './MealItemForm.css';
import UseButton from '../UI/UseButton';

const MealItemForm = () => {
  return (
    <form className="input">
      <label htmlFor="items">Amount</label>
      <input type="number" id="items" />
      <div>
        <UseButton typeOf="submit" value="+Add" ></UseButton>
      </div>
    </form>
  );
};

export default MealItemForm;
