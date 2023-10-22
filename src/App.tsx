import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './assets/scss/styles.scss';

import Header from './components/Header/Header';

import FirstMethod from './pages/FirstMethod/FirstMethod';
import SecondMethod from './pages/SecondMethod/SecondMethod';
import ThirdMethod from './pages/ThirdMethod/ThirdMethod';
import FourthMethod from './pages/FourthMethod/FourthMethod';
import FifthMethod from './pages/FifthMethod/FifthMethod';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<FirstMethod />}
          />
          <Route
            path="/secondMethod"
            element={<SecondMethod />}
          />
          <Route
            path="/thirdMethod"
            element={<ThirdMethod />}
          />
          <Route
            path="/fourthMethod"
            element={<FourthMethod />}
          />
          <Route
            path="/fifthMethod"
            element={<FifthMethod />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
