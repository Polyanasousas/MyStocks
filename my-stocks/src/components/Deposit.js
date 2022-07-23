import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import StockContext from '../context/StockContext';

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
  } = useContext(StockContext);

  let navigate = useNavigate();


  const updateBalance = () => {
    const newBalance = (+balanceValue + +balanceUpdateInput);
    const userObj = {value: newBalance, email: userEmail, name: userName};

    localStorage.setItem('balance', JSON.stringify([...usersBalances, userObj]));
    setUsersBalances([...usersBalances, userObj]);
    setBalanceValue(+newBalance);
    navigate('/general');
  }

  return (
    <>
    <Header />
    <h1>Deposit Page</h1>
    <h2>Balance: R${balanceValue}</h2>
    <input
      type="text"
      placeholder="Inform value"
      data-testid="deposit-input"
      onChange={ ({ target }) => setBalanceUpdateInput(target.value) }
    />
    <button
      type="button"
      data-testid="deposit-button"
      onClick={ () => updateBalance() }
    >Deposit</button>
    </>
  );
}

export default Deposit;