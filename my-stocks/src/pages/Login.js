import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';

const Login = () => {
  const [userPassword, setUserPassword] = useState('');
  const {
    userEmail,
    setUserEmail,
    setBalanceValue,
  } = useContext(StockContext);
  
  const verifyUser = () => {
    const validateEmail = /^\w+@\w+\.\w+$/;
    const number = 6;
    if (!validateEmail.test(userEmail) || userPassword.length <= number) {
      return true;
    }
  };

  const usersBalancesList = () => JSON.parse(localStorage
    .getItem('balance'));
  
  const getSavedUser = () => {
    const userIsSaved = usersBalancesList.find(({ user }) => user === userEmail);
    
    if (userIsSaved) {
      setBalanceValue(userIsSaved.value)
      navigate("/general")
    }
    setBalanceValue(0);
  }

  let navigate = useNavigate();
  
  return (
    <form>
      <input
        type="email"
        data-testid="email-input"
        placeholder="Email"
        onChange={ ({ target }) => setUserEmail(target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Password"
        onChange={ ({ target }) => setUserPassword(target.value) }
      />
      <button
        type="button"
        data-testid="login-button"
        disabled={ verifyUser() }
        onClick={ () => getSavedUser() }
      >
        Entrar
      </button>
      <button
        type="button"
        data-testid="registrate-button"
        onClick={ () => navigate("/guide") }
      >
        Registrate
      </button>
      
    </form>
  );
}

export default Login;