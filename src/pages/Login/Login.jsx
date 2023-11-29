// Login.js
import React, { useState } from 'react';
import style from './login.module.css'
import loginImage from '../../assets/taletentos-1.png'; // Substitua pelo caminho real da sua imagem

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    // Chame a função onLogin quando o login for bem-sucedido
    onLogin(username);
  };

  return (
    <section className={style.lowerContainer}>
      <div className={style.outerContainer}>
      <div className={style.upperContainer}>
        <div className={style.logo}>
        <img src={loginImage} alt="Login" className={style.titleImage} />
        </div>
     
       <form className={style.form}>
          <label className={style.label}>
            
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={style.input}
            />
          </label>
  
          <label className={style.label}>
           
            <input
              type="password"
              placeholder="........."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={style.input}
            />
          </label>
  
          <a className={style.button} href='/home'>
            Login
          </a>
        </form>
      </div>
  
      
    </div>
  </section>
  );
};

export default Login;
