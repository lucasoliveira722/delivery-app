import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GenericContextProvider from './context/GenericContextProvider';
import store from './store';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <GenericContextProvider>
      <BrowserRouter>
        <Provider store={ store }>
          <Routes>
            <Route path="/" element={ <Navigate replace to="/login" /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="customer/products" element={ <Products /> } />
          </Routes>
        </Provider>
      </BrowserRouter>
    </GenericContextProvider>
  );
}

export default App;
