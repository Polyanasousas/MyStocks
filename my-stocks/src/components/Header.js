import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';
import logo from '../images/logo-rectangle.png';
import wallet from '../images/carteira.png'
import '../css/Header.css';

const Header = () => {
  const {
    userName,
    balanceValue,
  } = useContext(StockContext);

  let navigate = useNavigate();

    return (
    <div id="general-header-container">
      <header>
        <div id="header-logo-container">
        <img
          data-testid="general-header-logo-img"
          src={ logo }
          alt="Logotipo do site, escrito 'MyStocks com duas moedas do lado"
       />
        </div>
        <div id="header-text-container">
          <h3>Hi, {userName}!</h3>
            <div id="header-icon-balance-container">
            <img
              id="header-icon"
              data-testid="generalheader-icon-img"
              src={ wallet }
              alt="ícone de carteira"
            />
            <h3>R${Number(balanceValue).toFixed(2)}</h3>
            </div>
        </div>      
        <div id="header-page-buttons">
          <button
            className='account-border'
            data-testid="general-btn"
            type="button"
            onClick={ () => navigate("/general") }
          >
          General
          </button>
          <button
            className='button-border'
            data-testid="my-stocks-btn"
            type="button"
            onClick={ () => navigate("/my-stocks") }
          >
          My Stocks
          </button>
          <button
            className='button-border'
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