import React, { useState } from "react";
import PropTypes from 'prop-types';
import StockContext from "./StockContext";

const StockProvider = ({ children }) => {
  const [selectedStock, setSelectedStock] = useState([]);
  const [balanceValue, setBalanceValue] = useState(0);
  const [balanceUpdateInput, setBalanceUpdateInput] = useState('');
  const [stocksList, setStocksList] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [usersBalances, setUsersBalances] = useState([]);


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