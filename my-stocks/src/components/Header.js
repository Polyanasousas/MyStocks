import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  return (
    <div>
      <header>       
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
        </header>
    </div>
  );
}

export default Header;