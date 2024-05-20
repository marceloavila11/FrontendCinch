// src/pages/Login.js

import React, { useState } from 'react';
import '../css/Login.css'; // Asegúrate de usar la ruta correcta a Login.css

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (
    <div id="background-container">
      <div id="login-container">
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
        <div className="form-footer">
          <p>Did you forget your password? <a href="#">Click Here</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
