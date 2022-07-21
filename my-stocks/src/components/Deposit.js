import React, { useContext } from 'react';
import Header from '../components/Header';
import StockContext from '../context/StockContext';

const Deposit = () => {
  const {
    balanceValue,
    setBalanceValue,
    balanceUpdateInput,
    setBalanceUpdateInput,
    userEmail,
    usersBalances,
    setUsersBalances,
  } = useContext(StockContext);

  const updateBalance = () => {
    const newBalance = (+balanceValue + +balanceUpdateInput);
    localStorage.setItem('balance', JSON.stringify([...usersBalances, {value: newBalance, user: userEmail}]));
    setUsersBalances([...usersBalances, {value: newBalance, user: userEmail}]);
    setBalanceValue(newBalance);
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