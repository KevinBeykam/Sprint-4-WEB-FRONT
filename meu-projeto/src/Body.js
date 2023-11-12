// src/Body.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CustomBox = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #ffcc00; /* Cor de fundo personalizada */
`;

function Body({ isLoggedIn, onLogin, errorMessage, setErrorMessage }) {
  const [rm, setRM] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Verifique as credenciais aqui
    if (
      (rm === 'RM99209' && password === '123456') ||
      (rm === 'RM550154' && password === '123456') ||
      (rm === 'RM98919' && password === '123456')
    ) {
      onLogin('User', rm, password);
    } else {
      setErrorMessage('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <main className="grid-container">
      {!isLoggedIn && (
        <div className="content">
          <h2>Login</h2>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {/* ... (seu código de login existente) */}
        </div>
      )}
      {isLoggedIn && (
        <div className="content">
          <CustomBox>
            <h2>Conteúdo Personalizado</h2>
            <p>Este é um exemplo de conteúdo com estilos personalizados usando styled-components.</p>
          </CustomBox>
        </div>
      )}
    </main>
  );
}

export default Body;
