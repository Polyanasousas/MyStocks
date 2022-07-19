import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import General from '../pages/General';
import MyStocks from '../pages/MyStocks';
import Trade from '../pages/Trade';
import Account from '../pages/Account';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/general" element={ <General /> } />
      <Route path="/my-stocks" element={ <MyStocks />} />
      <Route path="/trade" element={ <Trade /> } />
      <Route path="/account" element={ <Account />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
