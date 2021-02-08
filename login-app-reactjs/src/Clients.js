/*import React from 'react';

function Clients() {
  return (
    <div>
      Welcome to the Client Page!
    </div>
  );
}

export default Clients;*/
//import React from 'react';
import React, { useEffect, useState } from "react";
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditYo from './components/EditYo';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import './info.css';

/*
function Clients() {
  return (
    <div>
      Welcome to the Client Page!
    </div>
  );
}

export default Clients;*/


function Clients() {

  const [users, setUsers] = useState([]);
  // Agregar usuarios
/*  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
*/
  const apiUrl = 'http://localhost:3005/clients/';
  useEffect(() => {
    axios
      .get(apiUrl)
      .then(result => setUsers(result.data));
  }, []);

  const addUser = (user) => {
    user.id = uuidv4()
    console.log(user);
    console.log(users);
    setUsers([
      ...users,
      user
    ])
    axios.post(apiUrl, {
      id: user.id,
      name: user.name,
      username: user.username,
      address: 'direccion'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  // Eliminar usuario
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    axios.delete(apiUrl+id)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  // Editar usuario
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const editRow = user => {
    setEditing(true) 
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    axios.put(apiUrl+id, {
      id: updatedUser.id,
      name: updatedUser.name,
      username: updatedUser.username,
      address: 'direccion'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="container">
      <h1>CRUD Clientes</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditYo 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add Client</h2>
            <AddUserForm addUser={addUser}  />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default Clients;