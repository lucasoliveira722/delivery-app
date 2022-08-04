import React, { useState, useMemo } from 'react';

function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const isValidButton = useMemo(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const numberCompare = 6;
    const test = true;
    if (regexEmail.test(inputEmail) && inputPassword.length < numberCompare) {
      return false;
    }
    return test;
  }, [inputEmail, inputPassword]);

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
      <button type="button" disabled={ isValidButton }>logar</button>
    </form>
  );
}

export default Login;
