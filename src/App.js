import React from 'react';

import Header from './components/layout/Header';
import Meal from './components/meals/Meal';
import Cart from './components/cart/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <Meal />
    </React.Fragment>
  );
}

export default App;
