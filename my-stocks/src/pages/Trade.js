import React, { useContext, useState } from 'react';
import StockContext from '../context/StockContext';
import Header from '../components/Header';
import { updateBalanceInStorage, updateGeneralTable } from '../helpers/Helpers';

const Trade = () => {
  const [purchaseQnt, setPurchaseQnt] = useState(0);
  const [buyBtnClicked, setBuyBtnClicked] = useState(false);
  /* const [sellBtnClicked, setSellBtnClicked] = useState(false); */

  const {
    selectedStock,
    balanceValue,
    setBalanceValue,
    setSelectedStock,
    userEmail,
    userName,
    stocksList,
    setStocksList,
    setTableUpdated,
    /* myStocks, 
    setMyStocks, */
  } = useContext(StockContext);

  const verifyBalanceToBuy = () => {
    const allowedPurchase = Math.floor(+balanceValue / +selectedStock.price);
    const purchase = +balanceValue - (+purchaseQnt * +selectedStock.price);
    if (buyBtnClicked === true) setBuyBtnClicked(false);
    
    if (purchaseQnt > allowedPurchase) {
      alert('Purchase exceeded your available balance')
    }

    const selectedStockUpdated = {
      stock: selectedStock.stock,
      company: selectedStock.company,
      price: selectedStock.price, 
      avaiableQnt: (+selectedStock.avaiableQnt - +purchaseQnt)};

    
    
    const updatedTable = updateGeneralTable(stocksList, selectedStockUpdated);
    setStocksList(updatedTable)
    updateBalanceInStorage(userEmail, purchase, userName);
    setBalanceValue(purchase);
    setTableUpdated(true);
    setSelectedStock(selectedStockUpdated);
  }

  const tableTitles = ['Stock', 'Company', 'Unit Value(BRL)', 'Avaiable Qnt', 'Purchased']

  return (
    <>
    <Header />
      <table border="1">
        <thead>
          <tr>
            {tableTitles.map((title) => <th key={ title }>{ title }</th>)}
            <th>Purchased</th>
          </tr>
        </thead>
        <tbody>   
            <tr key={ selectedStock.stock }>
                {Object.values(selectedStock).map((el) => (<td key={ el }>{ el }</td>))}
                <td>{purchaseQnt}</td>
            </tr>
        </tbody>
      </table>
      <input
        type="text"
        data-testid="purchase-input"
        placeholder="Inform purchase quantity"
        onChange={ ({ target }) => setPurchaseQnt(target.value) }
      />
      <button
      data-testid="buy-stock-btn"
      type="button"
      onClick={ verifyBalanceToBuy }
      >Buy</button>
      <button
      data-testid="sell-stock-btn"
      type="button"
      >Sell</button>
    </>
  );
}

export default Trade;