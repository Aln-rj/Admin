import React, { useState } from "react";

function UserTable({ users, setUsers }) {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setEditFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  const handleCancelClick = () => {
    setEditingUserId(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveClick = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              name: editFormData.name,
              email: editFormData.email,
              role: editFormData.role,
            }
          : user
      )
    );
    setEditingUserId(null);
  };

  const handleDeleteClick = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleAddUserClick = () => {
    const newUser = {
      id: users.length + 1, 
      name: "",
      email: "",
      role: "",
    };
    setUsers([...users, newUser]);
    setEditingUserId(newUser.id); 
    setEditFormData({ name: "", email: "", role: "" });
  };

  const styles = {
    container: {
      background: "linear-gradient(to right, #e0eafc, #cfdef3)",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Roboto', sans-serif",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "20px 0",
    },
    th: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px",
      border: "1px solid #ddd",
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
      textAlign: "center",
    },
    button: {
      margin: "5px",
      padding: "5px 10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    addUserButton: {
      backgroundColor: "#6c63ff",
      color: "white",
      marginBottom: "10px",
    },
    editButton: {
      backgroundColor: "#6c63ff",
      color: "white",
    },
    deleteButton: {
      backgroundColor: "#ff4d4d",
      color: "white",
    },
    saveButton: {
      backgroundColor: "#28a745",
      color: "white",
    },
    cancelButton: {
      backgroundColor: "#dc3545",
      color: "white",
    },
    input: {
      padding: "5px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "90%",
    },
  };

  return (
    <div style={styles.container}>
      <h3>User Management</h3>
      <button
        onClick={handleAddUserClick}
        style={{ ...styles.button, ...styles.addUserButton }}
      >
        Add User
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editingUserId === user.id ? (
                <>
                  <td style={styles.td}>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleFormChange}
                      style={styles.input}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleFormChange}
                      style={styles.input}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      type="text"
                      name="role"
                      value={editFormData.role}
                      onChange={handleFormChange}
                      style={styles.input}
                    />
                  </td>
                  <td style={styles.td}>
                    <button
                      onClick={() => handleSaveClick(user.id)}
                      style={{ ...styles.button, ...styles.saveButton }}
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      style={{ ...styles.button, ...styles.cancelButton }}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.role}</td>
                  <td style={styles.td}>
                    <button
                      onClick={() => handleEditClick(user)}
                      style={{ ...styles.button, ...styles.editButton }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(user.id)}
                      style={{ ...styles.button, ...styles.deleteButton }}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
