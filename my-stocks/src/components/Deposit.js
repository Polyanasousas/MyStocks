import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import StockContext from '../context/StockContext';
import { checkUserSavedData } from '../helpers/Helpers';
import '../css/Transactions.css'

const Deposit = () => {
  const {
    balanceValue,
    setBalanceValue,
    balanceUpdateInput,
    setBalanceUpdateInput,
    userEmail,
    userName, 
    usersBalances,
    setUsersBalances,
    account, 
    setAccount,
  } = useContext(StockContext);

  let navigate = useNavigate();
  const userAccount = checkUserSavedData(userEmail, 'user');

  useEffect(() => {
    userAccount ? setAccount(userAccount.transferAccount) : setAccount(0);
  }, []);


  const balanceDeposit = () => {
    const newBalance = (+balanceValue + +balanceUpdateInput);
    const userObj = {value: newBalance, email: userEmail, name: userName};

    localStorage.setItem('balance', JSON.stringify([...usersBalances, userObj]));
    setUsersBalances([...usersBalances, userObj]);
    setBalanceValue(+newBalance);
    navigate('/general')
  }

  return (
    <>
    <Header />
    <div className="transaction-page">
      <div className="account-text-input-container">
        <h3>Inform a value to deposit on your transfer account</h3>
        <div className="account-number-container">
          <span>{account}</span>
        </div>
      </div>
      <form>
        <input
          type="number"
          placeholder="  Inform value"
          data-testid="deposit-input"
          onChange={ ({ target }) => setBalanceUpdateInput(target.value) }
        />
        <button
          type="button"
          data-testid="deposit-button"
          onClick={ () => balanceDeposit() }
        >Deposit</button>
      </form>
      </div>
    </>
  );
}

export default Deposit;