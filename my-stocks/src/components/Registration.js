import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';
import { validateEmailAndPassword } from '../helpers/Helpers';
import stocks from '../db/data';
import '../css/Registrate.css';
import logo from '../images/logo-rectangle.png'

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
    setUserPassword,
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
    if (input === 'email') setUserEmail(inputValue);
    if (input === 'password') setUserPassword(inputValue);

    user[input] = inputValue;
    return user;
  }

  const enableButton = () => {
    const loginValidation = validateEmailAndPassword(userEmail, userPassword);
  
    if (!loginValidation) {
      return true;
    }
    return false;
  }

  const saveInStorage = (userObj) => {

    tableUpdated ? setStocksList(stocksList) : setStocksList(stocksArr);

    localStorage.setItem('user', JSON.stringify([...usersData, userObj]));
    setUserEmail(userObj.email)
    setUsersData([...usersData, userObj]);
    setUserName(userObj.firstName);
    setBalanceValue(0)
    navigate('/account/deposit');

  }

  return (
    <div id="registration-page">
      <header>
      <img
          data-testid="registrate-logo-img"
          src={ logo }
          alt="Logotipo do site, escrito 'MyStocks com duas moedas do lado'"
      />
      </header>
      <div id="instruction-container">
        <p>Complete according to the following instructions:</p>
        <ul>
          <li>Fill in all required data</li>
          <li>Add a valid email</li>
          <li>Add a password with at least 8 characters (not special ones)</li>
        </ul>
      </div>
      <div id="registrate-form-container">
      <form>
      <input
      type="text"
      placeholder="  Inform Your FirstName"
      data-testid="firstname-input"
      onChange={ ({ target }) => insertData('firstName', target.value)}
      />
       <input
      type="text"
      placeholder="  Inform Your LastName"
      data-testid="lastname-input"
      onChange={ ({ target }) => insertData('lastName', target.value)}
      />
      <input
      type="text"
      placeholder="  Inform a document (CPF or Passport)"
      data-testid="document-input"
      />
      <input
      type="text"
      placeholder="  Inform Account for transferences"
      data-testid="tranfer-account-input"
      onChange={ ({ target }) => insertData('transferAccount', target.value)}
      />
      <input
      type="text"
      placeholder="  Inform your email"
      data-testid="email-input"
      onChange={ ({ target }) => insertData('email', target.value)}
      />
      <input
      type="text"
      placeholder="  Inform your password"
      data-testid="password-input"
      onChange={ ({ target }) => insertData('password', target.value)}
      />
      <div id="registrate-button-container">
      <button
        type="button"
        data-testid="return-login-button"
        onClick={ () => navigate('/') }
        >Return</button>
      <button
        type="button"
        data-testid="save-registration-button"
        disabled={ enableButton() }
        onClick={ () => saveInStorage(user) }
      >Conclude Registration</button>
      </div>
    </form> 
    </div> 
    </div>
  );
}

export default Registration;