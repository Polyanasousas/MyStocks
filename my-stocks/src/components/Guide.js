import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Guide.css'

const Guide = () => {
  return (
    <>
    <section className='guide-container'>
      <div className='guide-text-container'>
        <h3>
        Welcome to MyStocks App, the best app for brazilian stocks transactions. Our goal is to
        present company stocks from Brazil to foreign traders, so the app wallet only works with 
        transactions in Real currency.
        </h3>
        <p>
          Follow to the instructions below for using our app and Good Trade!
        </p>
        <p>Step 1 <br></br>
        Registrate a bank account that accepts brazilian currency so you can transfer your profits.
          </p>
        <p>

        Step 2 <br></br>
        Deposit the desired value to your app wallet to start buying stocks.
        </p>
        <p>
        Step 3 <br></br>
        Navigate through our app and choose the stocks that best fits your trade expectations.
        </p>

        Ready to trade?
      </div>
      <div className='ready-back-container'>
      <div className='back-to-login-link'>
        <Link to='/'>
          <h2>Back</h2>
        </Link>
      </div>
      <div className='ready-link'>
        <Link to='/registration'>
          <h2>Ready!</h2>
        </Link>
      </div>
      </div>
     
    </section>
    </>
  );
}

export default Guide;