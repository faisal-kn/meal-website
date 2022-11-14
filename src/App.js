import React from 'react';

import Header from './components/layout/Header';
import Meal from './components/meals/Meal';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
