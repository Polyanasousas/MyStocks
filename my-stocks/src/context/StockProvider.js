import React, { useState } from "react";
import PropTypes from 'prop-types';
import StockContext from "./StockContext";

const StockProvider = ({ children }) => {
  const [stocksAPI, setStocksAPI] = useState([]);

  const context = {
    stocksAPI,
    setStocksAPI,
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