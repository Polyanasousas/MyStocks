import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StockContext from '../context/StockContext';
import { checkUserSavedData} from '../helpers/Helpers';
import '../css/Login.css'
import logo from '../images/logo-square.png'
import profile from '../images/usuario-de-perfil.png'
import padlock from '../images/padlock.png'

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
    <div id="login-page">
    <div id="login-logo-container">
      <img
          data-testid="login-logo-img"
          src={ logo }
          alt="Logotipo do site, escrito 'MyStocks com duas moedas do lado'"
      />
    </div>
    <div id="login-form-container">
    <form>
      <div id="login-inputs-container">
        <div className="icon-input-container">
      <img
          data-testid="login-profile-icon"
          src={ profile }
          alt="Ícone de perfil"
      />
      <input
        type="email"
        data-testid="email-input"
        placeholder="  Inform your email"
        onChange={ ({ target }) => setUserEmail(target.value) }
      />
        </div>
        <div className="icon-input-container">
        <img
          data-testid="login-padlock-icon"
          src={ padlock }
          alt="Ícone de cadeado"
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="  Inform your password"
        onChange={ ({ target }) => setUserPassword(target.value) }
      />
      </div>
      </div>
      <div id="login-buttons-container">
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
      </div>
    </form>
    </div>
    </div>
  );
}

export default Login;