import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GenericContextProvider from './context/GenericContextProvider';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <GenericContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </BrowserRouter>
    </GenericContextProvider>
  );
}

export default App;
