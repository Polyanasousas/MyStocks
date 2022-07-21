import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import General from '../pages/General';
import Trade from '../pages/Trade';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';
import Historic from '../components/Historic';
import MyStocks from '../pages/MyStocks';
import Account from '../pages/Account';
import Registration from '../components/Registration';
import Guide from '../components/Guide';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/guide" element={ <Guide /> } />
      <Route path="/registration" element={ <Registration /> } />
      <Route path="/general" element={ <General /> } />
      <Route path="/trade" element={ <Trade /> } />
      <Route path="/my-stocks" element={ <MyStocks />} />
      <Route path="/account" element={ <Account />} />
      <Route path="/account/deposit" element={ <Deposit /> } />
      <Route path="/account/withdraw" element={ <Withdraw /> } />
      <Route path="/account/historic" element={ <Historic /> } />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
