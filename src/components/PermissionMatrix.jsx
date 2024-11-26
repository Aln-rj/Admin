import React, { useState } from 'react';

function PermissionMatrix({ roles, setRoles, permissions }) {
  const [newRoleName, setNewRoleName] = useState('');

  const handleAddRole = () => {
    if (newRoleName.trim() === '') return;
    setRoles([
      ...roles,
      { id: Date.now(), roleName: newRoleName, permissions: [] },
    ]);
    setNewRoleName('');
  };

  const handlePermissionToggle = (roleId, permission) => {
    setRoles(
      roles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((p) => p !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #f9f7d9, #ffd8cb)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: "'Roboto', sans-serif",
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '20px 0',
    },
    th: {
      backgroundColor: '#ff6f61',
      color: 'white',
      padding: '10px',
      border: '1px solid #ddd',
    },
    td: {
      padding: '10px',
      border: '1px solid #ddd',
      textAlign: 'center',
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      width: '200px',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4caf50',
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
      <h3 style={styles.header}>Permission Matrix</h3>
      <input
        type="text"
        placeholder="Enter new role name"
        value={newRoleName}
        onChange={(e) => setNewRoleName(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAddRole} style={styles.button}>
        Add Role
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Role</th>
            {permissions.map((permission) => (
              <th key={permission} style={styles.th}>
                {permission}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td style={styles.td}>{role.roleName}</td>
              {permissions.map((permission) => (
                <td style={styles.td} key={permission}>
                  <input
                    type="checkbox"
                    checked={role.permissions.includes(permission)}
                    onChange={() => handlePermissionToggle(role.id, permission)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PermissionMatrix;
