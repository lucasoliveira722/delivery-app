import React, { useState, useMemo, useCallback, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Login() {
  const navigate = useNavigate();
  const { handleSaveLocalStorage } = useContext(GenericContext);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const isValidButton = useMemo(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const numberCompare = 6;
    const valid = true;
    if (regexEmail.test(inputEmail) && inputPassword.length > numberCompare) {
      return false;
    }
    return valid;
  }, [inputEmail, inputPassword]);

  const handleLogin = useCallback(async () => {
    try {
      await API.loginUser(inputEmail, inputPassword)
        .then((res) => {
          if (res) {
            handleSaveLocalStorage('token', res.token);
            navigate('/products');
          }
        });
    } catch (error) {
      throw new Error(error.message);
    }
  }, [
    inputEmail,
    inputPassword,
    navigate,
    handleSaveLocalStorage,
  ]);

  return (
    <form>
      <label htmlFor="common_login__input-email">
        <input
          data-testid="common_login__input-email"
          placeholder="digite seu Email"
          type="text"
          onChange={ ({ target }) => setInputEmail(target.value) }
        />
      </label>
      <label htmlFor="common_login__input-password">
        <input
          data-testid="common_login__input-password"
          type="password"
          placeholder="digite sua senha"
          onChange={ ({ target }) => setInputPassword(target.value) }
        />
      </label>
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ isValidButton }
        onClick={ () => handleLogin() }
      >
        Login
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda Nao Tenho Conta
      </button>
    </form>
  );
}

export default Login;
