import React, { useState } from "react";

function RoleTable({ roles, setRoles }) {
  const [editingRoleId, setEditingRoleId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    roleName: "",
    permissions: "",
  });

  const handleEditClick = (role) => {
    setEditingRoleId(role.id);
    setEditFormData({
      roleName: role.roleName,
      permissions: role.permissions,
    });
  };

  const handleCancelClick = () => {
    setEditingRoleId(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveClick = (roleId) => {
    setRoles(
      roles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              roleName: editFormData.roleName,
              permissions: editFormData.permissions,
            }
          : role
      )
    );
    setEditingRoleId(null);
  };

  const handleDeleteClick = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  const handleAddRoleClick = () => {
    const newRole = {
      id: roles.length + 1, 
      roleName: "",
      permissions: "",
    };
    setRoles([...roles, newRole]);
    setEditingRoleId(newRole.id); 
    setEditFormData({ roleName: "", permissions: "" });
  };

  const styles = {
    container: {
      background: "linear-gradient(to right, #e8eaf6, #e3f2fd)",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Roboto', sans-serif",
      marginTop: "20px",
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
    addRoleButton: {
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
      <h3>Role Management</h3>
      <button
        onClick={handleAddRoleClick}
        style={{ ...styles.button, ...styles.addRoleButton }}
      >
        Add Role
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Role Name</th>
            <th style={styles.th}>Permissions</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              {editingRoleId === role.id ? (
                <>
                  <td style={styles.td}>
                    <input
                      type="text"
                      name="roleName"
                      value={editFormData.roleName}
                      onChange={handleFormChange}
                      style={styles.input}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      type="text"
                      name="permissions"
                      value={editFormData.permissions}
                      onChange={handleFormChange}
                      style={styles.input}
                    />
                  </td>
                  <td style={styles.td}>
                    <button
                      onClick={() => handleSaveClick(role.id)}
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
                  <td style={styles.td}>{role.roleName}</td>
                  <td style={styles.td}>{role.permissions}</td>
                  <td style={styles.td}>
                    <button
                      onClick={() => handleEditClick(role)}
                      style={{ ...styles.button, ...styles.editButton }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(role.id)}
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

export default RoleTable;
