import React, { useState } from 'react';

const UsuarioForm = ({ onAdicionarUsuario }) => {
  const [nome, setNome] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onAdicionarUsuario({ nome });
    setNome('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default UsuarioForm;
