import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';
import Header from '../components/Header';
import '../css/General.css'

const General = () => {
  const {
    setSelectedStock,
    stocksList,
  } = useContext(StockContext);

  let navigate = useNavigate();

  const tableTitles = ['Stock', 'Unit Value(BRL)', 'Trade'];

  const keysForTable = stocksList.map(({ stock, price }) => ({stock , price}));
    

  const selectStock = (stockSelected) => {
    const stockToTrade = stocksList
      .find((el) => el.stock === stockSelected.stock);
    setSelectedStock(stockToTrade);
    navigate("/trade")
  }

  return (
    <>
    <Header />
      <table border="1" id="general-page-table">
        <thead>
          <tr>
            {tableTitles.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {keysForTable.map((item) => (
            <tr key={ item.stock }>
              {Object.values(item).map((el) => (<td className="general-page-td"key={ el }>{ el }</td>))}
              <td>
                <button
                className="general-trade-button"
                type="button"
                data-testid="geral-table-button"
                onClick={ () => selectStock(item) }
                >Trade</button></td>
            </tr>))}
        </tbody>
      </table>
    </>
  );
}

export default General;