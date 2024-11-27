import React, { useState, useEffect } from 'react';
import RoleTable from '../components/RoleTable';
import { fetchRoles, addRole, updateRole } from '../services/roleService';



function RoleManagement() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  const handleAddRole = (newRole) => {
    addRole(newRole).then((role) => setRoles([...roles, role]));
  };

  const handleUpdateRole = (updatedRole) => {
    updateRole(updatedRole).then(() =>
      setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)))
    );
  };

  return (
    <div>
      <h2>Role Management</h2>
      <RoleTable roles={roles} onAdd={handleAddRole} onEdit={handleUpdateRole} />
    </div>
  );
}

export default RoleManagement;
