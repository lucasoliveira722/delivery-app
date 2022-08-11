import React, { useState, useMemo, useCallback, useContext } from 'react';
import jwt_decode from 'jwt-decode';

import { useNavigate } from 'react-router-dom';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Login() {
  const navigate = useNavigate();
  const { handleSaveLocalStorage } = useContext(GenericContext);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);

  const isValidButton = useMemo(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const numberCompare = 6;
    const valid = true;
    if (regexEmail.test(inputEmail) && inputPassword.length >= numberCompare) {
      return false;
    }
    return valid;
  }, [inputEmail, inputPassword]);

  const handleLogin = useCallback(async () => {
    try {
      await API.loginUser(inputEmail, inputPassword)
        .then((res) => {
          if (res) {
            const { data } = jwt_decode(res.token);
            handleSaveLocalStorage('user', {
              ...data,
              token: res.token,
            });
            navigate('/customer/products');
          }
        });
    } catch (err) {
      setError(true);
      throw new Error(err.message);
    }
  }, [
    inputEmail,
    inputPassword,
    navigate,
    handleSaveLocalStorage,
  ]);

  return (
    <section className="loginPage">
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
      {error
      && (
        <div
          data-testid="common_login__element-invalid-email"
        >
          <h2>Usuário não cadastrado</h2>
        </div>
      )}
    </section>
  );
}

export default Login;
