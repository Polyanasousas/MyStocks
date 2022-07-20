import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import depositImage from '../images/caixa-de-deposito.png';
import withdrawImage from '../images/saque.png';
import historicImage from '../images/extrato-bancario.png';
import '../css/account-cards.css'

const Account = () => {
  return (
    <>
    <Header />
    <div>Balance Available: R$</div>
    <section className='cards-container'>
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
      <div className='account-card'>
        <Link to='/account/historic'>
          <div className='card-img-container'>
            <img
              data-testid='historic-card-image'
              src={ historicImage }
              width="100%"
              alt='Desenho de um extrato bancário com um cifrão na frente'
              className="account-card-img"
            />
          </div>
        </Link>
        <div className='card-name-container'>
          <h2>Historic</h2>
        </div>
      </div>
    </section>
    </>
  );
}

export default Account;