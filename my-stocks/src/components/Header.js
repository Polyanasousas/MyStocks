import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';

const Header = () => {
  const {
    userName,
    balanceValue,
  } = useContext(StockContext);

  let navigate = useNavigate();

  /* fla@email.com
  flavinho */

  return (
    <div>
      <header> 
        <div>
        <h3>Balance: R${+balanceValue}</h3>
        <h3>Welcome, {userName}</h3>
        </div>      
        <div>
          <h2 data-testid="app-logo">Logo</h2>
          <button
            data-testid="general-btn"
            type="button"
            onClick={ () => navigate("/general") }
          >
          General
          </button>
          <button
            data-testid="my-stocks-btn"
            type="button"
            onClick={ () => navigate("/my-stocks") }
          >
          My Stocks
          </button>
          <button
            data-testid="account-btn"
            type="button"
            onClick={ () => navigate("/account") }
          >
          Account
          </button>      
        </div>
      </header>
    </div>
  );
}

export default Header;