import React from 'react';

import Header from './components/layout/Header';
import Meal from './components/meals/Meal';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const modalOpenHandler = () => {
    setShowModal(true);
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      {showModal && <Cart onModalClose={modalCloseHandler} />}
      <Header onModalShow={modalOpenHandler} />
      <Meal />
    </CartProvider>
  );
}

export default App;
