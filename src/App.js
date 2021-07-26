import React from 'react';

import Header from './components/layout/Header';
import Meal from './components/meals/Meal';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Meal />
    </React.Fragment>
  );
}

export default App;
