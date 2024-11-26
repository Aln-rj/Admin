let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ];
  
  export const fetchUsers = () => Promise.resolve(users);
  export const addUser = (user) => {
    user.id = Date.now();
    users.push(user);
    return Promise.resolve(user);
  };
  export const updateUser = (user) => {
    users = users.map((u) => (u.id === user.id ? user : u));
    return Promise.resolve(user);
  };
  export const deleteUser = (id) => {
    users = users.filter((u) => u.id !== id);
    return Promise.resolve();
  };
  