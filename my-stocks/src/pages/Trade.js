import React, { useContext } from 'react';
import StockContext from '../context/StockContext';
import Header from '../components/Header';

const Trade = () => {
  const {
    selectedStock,
  } = useContext(StockContext);

  const tableTitles = ['Stock', 'Company', 'Avarage Value(BRL)', 'Avaiable Quantity']
  return (
    <>
    <Header />
      <table border="1">
        <thead>
          <tr>
            {tableTitles.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          <tr key={ selectedStock.stock }>
              {Object.values(selectedStock).map((el) => (<td key={ el }>{ el }</td>))}
          </tr>
        </tbody>
      </table>
      <button
      data-testid="buy-stock-btn"
      type="button"
      >Buy</button>
      <button
      data-testid="sell-stock-btn"
      type="button"
      >Sell</button>
    </>
  );
}

export default Trade;