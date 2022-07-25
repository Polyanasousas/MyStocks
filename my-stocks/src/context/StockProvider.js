import React, { useState } from "react";
import PropTypes from 'prop-types';
import StockContext from "./StockContext";
import stocks from '../db/data';

const StockProvider = ({ children }) => {
  const [selectedStock, setSelectedStock] = useState([]);
  const [balanceValue, setBalanceValue] = useState(10000);
  const [balanceUpdateInput, setBalanceUpdateInput] = useState('');
  const [usersData, setUsersData] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [usersBalances, setUsersBalances] = useState([]);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [tableUpdated, setTableUpdated] = useState(false);
  const [myStocks, setMyStocks] = useState([]);
  const [account, setAccount] = useState(0);
  
  const stocksNewArr = stocks.map((el) => ({
    stock: el.cd_acao, 
    company: el.nm_empresa_rdz,
    price: el.vl_medio, 
  }));
    
  const [stocksList, setStocksList] = useState(stocksNewArr);

  const context = {
    stocksList,
    setStocksList,
    selectedStock,
    setSelectedStock,
    balanceValue,
    setBalanceValue,
    balanceUpdateInput,
    setBalanceUpdateInput,
    usersData,
    setUsersData,
    userEmail,
    setUserEmail,
    usersBalances,
    setUsersBalances,
    userName, 
    setUserName,
    userPassword, 
    setUserPassword,
    tableUpdated, 
    setTableUpdated,
    myStocks, 
    setMyStocks,
    account, 
    setAccount,
  };
  
  return (
    <StockContext.Provider value={ context }>
      {children}
    </StockContext.Provider>
  );
};

export default StockProvider;

StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};