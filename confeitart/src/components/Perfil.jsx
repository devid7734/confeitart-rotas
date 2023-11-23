import React, { useState } from 'react';
import '../components/Perfil.css';

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    nome: 'Nome do Usuário',
    cpf:'000.000.000-00',
    idade:'00 anos',
    grau:'ensino xxxx',
    email: 'email@example.com',
    senha:'xxxxxxxx',
    // Adicione outros campos do perfil conforme necessário
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Adicione aqui a lógica para salvar as alterações no perfil
  };

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="perfil">
      <h2>Perfil do Usuário</h2>
      {isEditing ? (
        <div>
          <div className='one'>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={profileInfo.nome}
            onChange={handleChange}
          />
          </div>
          <div className='two'>
           <label>cpf:</label>
          <input
            type="text"
            name="cpf"
            value={profileInfo.cpf}
            onChange={handleChange}
          />
          </div>
          <div className='three'>
           <label>idade:</label>
          <input
            type="text"
            name="idade"
            value={profileInfo.idade}
            onChange={handleChange}
          />
          </div>
          <div className='four'>
           <label>grau:</label>
          <input
            type="text"
            name="grau de ensino"
            value={profileInfo.grau}
            onChange={handleChange}
          />
          </div>
          <div className='five'>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={profileInfo.email}
            onChange={handleChange}
          />
          </div>
          <div className='six'>
           <label>Senha:</label>
          <input
            type="text"
            name="senha"
            value={profileInfo.senha}
            onChange={handleChange}
          />
          </div>
          {/* Adicione outros campos do perfil conforme necessário */}
          <button onClick={handleSaveClick}>Salvar</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Nome:</strong> {profileInfo.nome}
          </p>
          <p>
            <strong>Cpf:</strong> {profileInfo.cpf}
          </p>
          <p>
            <strong>Idade:</strong> {profileInfo.idade}
          </p>
          <p>
            <strong>grau:</strong> {profileInfo.grau}
          </p>
          
          <p>
            <strong>Email:</strong> {profileInfo.email}
          </p>
          <p>
            <strong>senha:</strong> {profileInfo.senha}
          </p>
          {/* Adicione outros campos do perfil conforme necessário */}
          <button onClick={handleEditClick}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default Perfil;