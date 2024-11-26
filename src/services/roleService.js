let roles = [
    { id: 1, roleName: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, roleName: 'User', permissions: ['Read'] },
  ];
  
  export const fetchRoles = () => Promise.resolve(roles);
  export const addRole = (role) => {
    role.id = Date.now();
    roles.push(role);
    return Promise.resolve(role);
  };
  export const updateRole = (role) => {
    roles = roles.map((r) => (r.id === role.id ? role : r));
    return Promise.resolve(role);
  };
  