const Users = [
  { id: 1, name: "Alan Raj", email: "alanraj660@gmail.com", role: "Admin"},
  { id: 2, name: "Kedhar Hari", email: "kedhar321@gmail.com", role: "User" },
];

  
  export const fetchUsers = () => Promise.resolve(Users);
  export const addUser = (user) => {
    user.id = Date.now();
    Users.push(user);
    return Promise.resolve(user);
  };
  export const updateUser = (user) => {
    Users = Users.map((u) => (u.id === user.id ? user : u));
    return Promise.resolve(user);
  };
  export const deleteUser = (id) => {
    Users = Users.filter((u) => u.id !== id);
    return Promise.resolve();
  };
