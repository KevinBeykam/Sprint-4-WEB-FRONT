import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss'; // Certifique-se de que o caminho do seu arquivo SCSS está correto

const users = [
  { username: 'RM550154', password: '123456' },
  { username: 'RM99209', password: '123456' },
  { username: 'RM98919', password: '123456' },
  // Adicione mais usuários conforme necessário
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Verificar se existe um usuário com o nome e senha fornecidos
    const authenticatedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (authenticatedUser) {
      navigate('/home');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
     

      <div className="login-content">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
