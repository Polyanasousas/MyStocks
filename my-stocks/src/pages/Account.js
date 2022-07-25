import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import depositImage from '../images/caixa-de-deposito.png';
import withdrawImage from '../images/saque.png';
import '../css/Account.css'

const Account = () => {
  return (
    <>
    <div id="account-page-container">
    <Header />
    <section className='account-cards-container'>
      <div className='account-card'>
        <Link to='/account/deposit'>
          <div className='card-img-container'>
            <img
              data-testid='deposit-card-image'
              src={ depositImage }
              width="100%"
              alt='Desenho de uma mão depositando moeda numa caixa'
              className="account-card-img"
              />
          </div>
        </Link>
        <div className='card-name-container'>
          <h2>Deposit</h2>
        </div>
      </div>
      <div className='account-card'>
        <Link to='/account/withdraw'>
          <div className='card-img-container'>
            <img
              id="withdraw-img"
              data-testid='withdrawcard-image'
              src={ withdrawImage }
              width="100%"
              alt='Desenho de uma mão recebendo moedas'
              className="account-card-img"
              />
          </div>
        </Link>
        <div className='card-name-container'>
          <h2>Withdraw</h2>
        </div>
      </div>
    </section>
    </div>
              </>
  );
}

export default Account;