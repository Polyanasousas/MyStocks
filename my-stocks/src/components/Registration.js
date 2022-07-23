import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';
import { validateEmailAndPassword } from '../helpers/Helpers';
import stocks from '../db/data';

const Registration = () => {
  let user = {};
  let navigate = useNavigate();

  const {
    usersData,
    setUsersData,
    userEmail,
    setUserEmail,
    setUserName,
    setBalanceValue,
    userPassword,
    stocksList,
    setStocksList,
    tableUpdated, 
  } = useContext(StockContext);

  const stocksArr = stocks.map((el) => ({
    stock: el.cd_acao, 
    company: el.nm_empresa_rdz, 
    price: el.vl_medio, 
    avaiableQnt: el.vl_volume}));

  useEffect(() => {
    delete user.firstName;
    delete user.lastName;
    delete user.email;
    delete user.password;
    delete user.transferAccount;
  }, []);

  const insertData = (input, inputValue) => {
    user[input] = inputValue;
    return user;
  }

  const saveInStorage = (userObj) => {
    const loginValidation = validateEmailAndPassword(userEmail, userPassword);

    if (!loginValidation) {
      alert('Email ou senha inválido!')
    }

    tableUpdated ? setStocksList(stocksList) : setStocksList(stocksArr);

    localStorage.setItem('user', JSON.stringify([...usersData, userObj]));
    setUserEmail(userObj.email)
    setUsersData([...usersData, userObj]);
    setUserName(userObj.firstName);
    setBalanceValue(0)
    navigate('/account/deposit');

  }

  return (
    <>
      <form>
      <input
      type="text"
      placeholder="Inform Your FirstName"
      data-testid="firstname-input"
      onChange={ ({ target }) => insertData('firstName', target.value)}
      />
       <input
      type="text"
      placeholder="Inform Your LastName"
      data-testid="lastname-input"
      onChange={ ({ target }) => insertData('lastName', target.value)}
      />
      <input
      type="text"
      placeholder="Email"
      data-testid="email-input"
      onChange={ ({ target }) => insertData('email', target.value)}
      />
      <input
      type="text"
      placeholder="Password"
      data-testid="password-input"
      onChange={ ({ target }) => insertData('password', target.value)}
      />
      <input
      type="text"
      placeholder="CPF or Passport"
      data-testid="document-input"
      />
      <input
      type="text"
      placeholder="Inform Account to transfer"
      data-testid="tranfer-account-input"
      onChange={ ({ target }) => insertData('transferAccount', target.value)}
      />
      <button
        type="button"
        data-testid="save-button"
        onClick={ () => saveInStorage(user) }
      >Conclude Registration</button>
    </form>  
    </>
  );
}

export default Registration;