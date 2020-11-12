import React, { useState, useRef } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import userService from '../../services/userService';

import './login.css';

function Login() {
  const [ error, setError ] = useState(false);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const history = useHistory();

  const Login = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await userService.login(emailRef.current.value, passRef.current.value);
      history.replace("/");
    } catch (error) {
      setError(true);
    }
  }


  if(userService.isLogged()){
    return <Redirect to="/" />
  }

  return (
    <div className="login">
      <div className="layer">
        <div className="form-container">
          <h1> Inicia Sesión</h1>
          <form onSubmit={Login}>
            <label htmlFor="email">Correo electrónico:</label>
            <input id="email" name="email" type="email" ref={emailRef} required/>
            <label htmlFor="password">Contraseña:</label>
            <input id="password" name="password" type="password" ref={passRef} required/>
            { error && (<label className="error">Error en el inicio de sesión</label>)}
            <input type="submit" value="Ingresar" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
