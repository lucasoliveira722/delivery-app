import React, { useState, useMemo, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Register() {
  const navigate = useNavigate();
  const { handleSaveLocalStorage } = useContext(GenericContext);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputName, setInputName] = useState('');

  const isValidButton = useMemo(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const numberComparePassword = 6;
    const numberCompareName = 12;
    const valid = true;
    if (
      regexEmail.test(inputEmail)
       && inputPassword.length > numberComparePassword
       && inputName.length > numberCompareName) {
      return false;
    }
    return valid;
  }, [inputEmail, inputName.length, inputPassword.length]);

  const registerUser = useCallback(async () => {
    const role = 'customer';
    try {
      await API.registerUser(inputName, inputEmail, inputPassword, role)
        .then((res) => {
          if (res) {
            handleSaveLocalStorage('token', res.token);
            navigate('/customer/products');
          }
        });
    } catch (error) {
      throw new Error(error.message);
    }
  }, [inputEmail, inputName, inputPassword, navigate, handleSaveLocalStorage]);

  return (
    <form>
      <label htmlFor="common_register__input-name">
        <input
          type="text"
          data-testid="common_register__input-name"
          placeholder="digiite seu nome completo"
          onChange={ ({ target }) => setInputName(target.value) }
        />
      </label>
      <label htmlFor="common_register__input-email">
        <input
          data-testid="common_register__input-email"
          placeholder="digite seu Email"
          type="text"
          onChange={ ({ target }) => setInputEmail(target.value) }
        />
      </label>
      <label htmlFor="common_register__input-password">
        <input
          data-testid="common_register__input-password"
          type="password"
          placeholder="digite sua senha"
          onChange={ ({ target }) => setInputPassword(target.value) }
        />
      </label>
      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={ isValidButton }
        onClick={ () => registerUser() }
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default Register;
