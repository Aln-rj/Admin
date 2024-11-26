import React, { useState } from 'react';

function UserTable({ users, setUsers }) {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) return;
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setNewUser({ name: '', email: '', role: '' });
  };

  const styles = {
    container: {
      background: 'linear-gradient(to right, #d4fc79, #96e6a1)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '20px 0',
    },
    th: {
      backgroundColor: '#3b8d99',
      color: 'white',
      padding: '10px',
      border: '1px solid #ddd',
    },
    td: {
      padding: '10px',
      border: '1px solid #ddd',
      textAlign: 'center',
    },
    input: {
      padding: '8px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#3b8d99',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h3>Add or Edit Users</h3>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        style={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Role"
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        style={styles.input}
      />
      <button onClick={handleAddUser} style={styles.button}>
        Add User
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
