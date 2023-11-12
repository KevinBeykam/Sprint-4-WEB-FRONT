import React from 'react';

const UsuarioList = ({ usuarios }) => (
  <div>
    <h2>Lista de Usuários</h2>
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nome}</li>
      ))}
    </ul>
  </div>
);

export default UsuarioList;
