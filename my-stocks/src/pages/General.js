import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';
import stocks from '../db/data';
import Header from '../components/Header';

const General = () => {
  const {
    setSelectedStock,
  } = useContext(StockContext);

  let navigate = useNavigate();

  const tableTitles = ['Stock', 'Company', 'Avarage Value(BRL)', 'Avaiable Quantity']

  const stocksArr = stocks.map((el) => ({stock: el.cd_acao, company: el.nm_empresa_rdz, price: el.vl_medio, avaiableQnt: el.vl_volume}));

  const selectStock = (stock) => {
    setSelectedStock(stock)
    navigate("/trade")
  }

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
          {stocksArr.map((item) => (
            <tr key={ item.stock }>
              {Object.values(item).map((el) => (<td key={ el }>{ el }</td>))}
              <td>
                <button
                type="button"
                data-testid="login-button"
                onClick={ () => selectStock(item) }
                >Trade</button></td>
            </tr>))}
        </tbody>
      </table>
    </>
  );
}

export default General;