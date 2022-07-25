import React, { useContext, useState } from 'react';
import StockContext from '../context/StockContext';
import Header from '../components/Header';
import { updateBalanceInStorage } from '../helpers/Helpers';
import { useNavigate } from 'react-router-dom';

const Trade = () => {
  const [purchaseInput, setPurchaseInput] = useState(0);

  const {
    selectedStock,
    balanceValue,
    setBalanceValue,
    userEmail,
    userName,
    myStocks, 
    setMyStocks,
  } = useContext(StockContext);

  let navigate = useNavigate()

  const selectedStockUpdated = {
    stock: selectedStock.stock,
    company: selectedStock.company,
    price: selectedStock.price, 
  };

  const verifyBalanceToBuy = () => {
    const allowedPurchase = Math.floor(+balanceValue / +selectedStock.price);
    const balance = +balanceValue - (+purchaseInput * +selectedStock.price);
    
    
    
    if (purchaseInput > allowedPurchase) {
      alert('Purchase exceeded your available balance')
    }

    
    setMyStocks([...myStocks, selectedStockUpdated]);
    updateBalanceInStorage(userEmail, balance, userName);
    setBalanceValue(balance);
    navigate('/my-stocks')
  }

  const verifyBalanceToSell = () => {
    const balance = +balanceValue + (+purchaseInput * +selectedStock.price);
    setBalanceValue(balance);
    updateBalanceInStorage(userEmail, balance, userName);
    navigate('/my-stocks')
  }

  return (
    <>
    <Header />
      <table border="1" id="trade-table">
        <tr>
          <th>Stock</th>
          <td>{selectedStock.stock}</td>
        </tr>
        <tr>
          <th>Company</th>
          <td>{selectedStock.company}</td>
        </tr>
        <tr>
          <th>Unit(BRL)</th>
          <td>{selectedStock.price}</td>
        </tr>
      </table>
      <input
        type="text"
        data-testid="purchase-input"
        placeholder="Inform purchase quantity"
        onChange={ ({ target }) => setPurchaseInput(target.value) }
      />
      <button
      data-testid="buy-stock-btn"
      type="button"
      onClick={ verifyBalanceToBuy }
      >Buy</button>
      <button
      data-testid="sell-stock-btn"
      type="button"
      onClick={ verifyBalanceToSell }
      >Sell</button>
    </>
  );
}

export default Trade;