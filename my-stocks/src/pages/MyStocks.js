import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import StockContext from '../context/StockContext';

const MyStocks = () => {
  const {
    setSelectedStock,
    myStocks, 
  } = useContext(StockContext);

  let navigate = useNavigate();

  const tableTitles = ['Stock', 'Unit Value(BRL)', 'Trade'];

  const stocksNotDuplicated = myStocks
    .reduce((acc, el) => {
      const stock = acc.filter((item) => el.stock !== item.stock);
      return [...stock, el]
    },[]);

  const goTrade = (stockSelected) => {
    const stockToTrade = myStocks
      .find((el) => el.stock === stockSelected.stock);
    setSelectedStock(stockToTrade);
    navigate("/trade")
  }

   return (
    <>
    <Header />
    <h1>My Stochs Page</h1>
    <table border="1" id="my-stocks-page-table">
        <thead>
          <tr>
            {tableTitles.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {stocksNotDuplicated.map((item) => (
            <tr key={ item.stock }>
              {Object.values(item).map((el) => (<td className="my-stocks-page-td"key={ el }>{ el }</td>))}
              <td>
                <button
                className="general-trade-button"
                type="button"
                data-testid="geral-table-button"
                onClick={ () => goTrade(item) }
                >Trade</button></td>
            </tr>))}
        </tbody>
      </table>
    </>
  );
}

export default MyStocks;