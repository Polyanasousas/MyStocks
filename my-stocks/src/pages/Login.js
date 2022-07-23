import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';
import { checkUserSavedData} from '../helpers/Helpers';

const Login = () => {
  const {
    userEmail,
    setUserEmail,
    setBalanceValue,
    setUserName,
    setUserPassword,
  } = useContext(StockContext);
  
  let navigate = useNavigate();
    
  const getSavedUser = () => {
    const savedUser = checkUserSavedData(userEmail, 'user');
    
    if (!savedUser) {
      alert('Email ou senha inválidos')
      navigate('/');
    }
    
    setBalanceValue(+savedUser.value)
    setUserName(savedUser.name);
    navigate("/general")
  }

  
  return (
    <form>
      <input
        type="email"
        data-testid="email-input"
        placeholder="Inform your email"
        onChange={ ({ target }) => setUserEmail(target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Inform your password"
        onChange={ ({ target }) => setUserPassword(target.value) }
      />
      <button
        type="button"
        data-testid="login-button"
        onClick={ () => getSavedUser() }
      >
        Sign in
      </button>
      <button
        type="button"
        data-testid="registrate-button"
        onClick={ () => navigate("/guide") }
      >
        Sign Up
      </button>
      
    </form>
  );
}

export default Login;