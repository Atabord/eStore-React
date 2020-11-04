import React, { useState } from 'react';
import './login.css';

function Login() {
  const [ error, setError ] = useState(false);
  return (
    <div className="layer">
      <div className="form-container">
        <h1> Inicia Sesión</h1>
        <form>
          <label for="email">Correo electrónico:</label>
          <input id="email" name="email" type="email" required/>
          <label for="password">Contraseña:</label>
          <input id="password" name="password" type="password" required/>
          { error && (<label className="error">Error en el inicio de sesión</label>)}
          <input type="submit" value="Ingresar" />
        </form>
      </div>
    </div>
  )
}

export default Login;
