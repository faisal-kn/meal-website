import React from 'react';

import Header from './components/layout/Header';
import Meal from './components/meals/Meal';
import Cart from './components/cart/Cart';

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const ModalHandler = () => {
    setShowModal(true);
  };
  return (
    <React.Fragment>
      {showModal && <Cart />}
      <Header onModalShow={ModalHandler} />
      <Meal />
    </React.Fragment>
  );
}

export default App;
