import React, { useState } from "react";
import UserTable from "./components/UserTable";
import RoleTable from "./components/RoleTable";



function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alan Raj", email: "alanraj660@gmail.com", role: "Admin" },
    { id: 2, name: "Kedhar Hari", email: "Kedhar321@gmail.com", role: "User" },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, roleName: "Admin", permissions: "Read, Write, Delete" },
    { id: 2, roleName: "User", permissions: "Read, Write" },
  ]);

  return (
    <div>
      <UserTable users={users} setUsers={setUsers} />
      <RoleTable roles={roles} setRoles={setRoles} />
    </div>
  );
}

export default App;



