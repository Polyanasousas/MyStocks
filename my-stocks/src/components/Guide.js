import React from 'react';
import { Link } from 'react-router-dom';
import '../css/account-cards.css'

const Guide = () => {
  return (
    <>
    <section className='guide-container'>
      <div className='guide-text-container'>
        Welcome to MyStocks App, the best app for brazilian stocks transactions. Our goal is to
        present company stocks from Brazil to foreign traders, so the app wallet only works with 
        transactions in Real currency.

        Follow to the instructions below for using our app and Good Trade!

        Step 1
        Registrate a bank account that accepts brazilian currency so you can transfer your profits.

        Step 2
        Deposit the desired value to your app wallet to start buying stocks.

        Step 3
        Navigate through our app and choose the stocks that best fits your trade expectations.

        Ready to trade?
      </div>
      <div className='ready-link'>
        <Link to='/registration'>
          <h2>Ready!</h2>
        </Link>
      </div>
      <div className='back-to-login-link'>
        <Link to='/'>
          <h2>Back</h2>
        </Link>
      </div>
     
    </section>
    </>
  );
}

export default Guide;