import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/usuarios').then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email };

    axios.post('http://localhost:3000/usuarios', newUser).then(response => {
        setUsers([...users, response.data]);
        setName('');
        setEmail('');
      })
      .catch(error => {
        console.error('Error al añadir el usuario:', error);
      });
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}

      <h3>Añadir Nuevo Usuario</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Añadir Usuario</button>
      </form>
    </div>
  );
};

export default UserList;
