import React, { useState } from "react"

const Login = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState ('');

  console.log('email', inputEmail);
  console.log('passowrd', inputPassword);

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
      <button type="button">logar</button>
    </form>
  )
}

export default Login;