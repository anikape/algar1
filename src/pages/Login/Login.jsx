import React, { useState } from 'react';
import style from './login.module.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    // Chame a função onLogin quando o login for bem-sucedido
    onLogin(username);
  };

  return (
    <div className={style.container}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href='/home'>Login</a>
    </div>
  );
};

export default Login;