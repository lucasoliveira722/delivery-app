import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GenericContextProvider from './context/GenericContextProvider';
import Checkout from './pages/Checkout';

import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <GenericContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="customer/products" element={ <Products /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
        </Routes>
      </BrowserRouter>
    </GenericContextProvider>
  );
}

export default App;
