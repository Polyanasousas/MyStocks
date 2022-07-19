import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  
  const verifyUser = () => {
    const validateEmail = /^\w+@\w+\.\w+$/;
    const number = 6;
    if (!validateEmail.test(userEmail) || userPassword.length <= number) {
      return true;
    }
  };
  
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
        onClick={ () => navigate("/general") }
      >
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;