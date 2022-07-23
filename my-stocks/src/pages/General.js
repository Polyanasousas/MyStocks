import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';
import Header from '../components/Header';

const General = () => {
  const {
    setSelectedStock,
    stocksList,
  } = useContext(StockContext);

  let navigate = useNavigate();

  const tableTitles = ['Stock', 'Company',  'Unit Value(BRL)', 'Avaiable Qnt']

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
          {stocksList.map((item) => (
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