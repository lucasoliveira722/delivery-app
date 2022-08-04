import React, { useState, useMemo } from "react"

const Login = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState ('');

  const isValidButton = useMemo(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(inputEmail) && inputPassword.length < 6 ) {
      return false;
    }
    return true
  }, [inputEmail, inputPassword])

  return (
    <form>
      <label>
        <input
          placeholder="digite seu Email"
          type='text'
          onChange={({target}) => setInputEmail(target.value)}
         />
      </label>
      <label>
        <input
          type="password"
          placeholder="digite sua senha"
          onChange={({target}) => setInputPassword(target.value)}
         />
      </label>
      <button type="button" disabled={isValidButton}>logar</button>
    </form>
  )
}

export default Login;