import React, { useState, useEffect } from 'react';
import UserTable from '../components/UserTable';
import { fetchUsers, addUser, updateUser, deleteUser } from '../services/userService';

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleAddUser = (newUser) => {
    addUser(newUser).then((user) => setUsers([...users, user]));
  };

  const handleUpdateUser = (updatedUser) => {
    updateUser(updatedUser).then(() =>
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)))
    );
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => setUsers(users.filter((user) => user.id !== id)));
  };

  return (
    <div>
      <h2>User Management</h2>
      <UserTable users={users} onAdd={handleAddUser} onEdit={handleUpdateUser} onDelete={handleDeleteUser} />
    </div>
  );
}

export default UserManagement;
