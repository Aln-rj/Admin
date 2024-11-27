Open your terminal.
Use the Vite template to create a new React project.
Install required dependencies like npm install.
Remove unused files from the src folder like App.css,index.css.
Create a blank file for customizations.
Install Tailwind CSS, PostCSS, and Autoprefixer.
Configure tailwind.config.js.
Install React Router DOM.
Modify App.jsx to define routes.
Inside the src folder, create folders named components,pages,services directory.
Add four files in components folder:ModalForm.jsx,PermissionMatrix.jsx,UserTable.jsx,RoleTable.jsx.
Add two files in pages folder:UserManagement.jsx,RoleManagement.jsx
Add two files in services folder:roleService.js,userService.js.
Create a stateful React component for managing users.
Use useState to manage the list of users.
Use a table to display users with "Edit" and "Delete" options.
Enable adding a new user.
Create a button that triggers a form input.
Allow saving the new user data to the state.
Enable editing users.
Add "Edit" buttons for each user.
Replace static data with input fields when the button is clicked.
Save changes back to the user state.
Add delete functionality.
Filter out the deleted user from the state.
Follow the same steps as User Management, but with role-specific fields like:Role Name, Permissions (e.g., Read, Write, Delete)
Allow: Adding new roles, Editing existing roles, Assigning permissions dynamically.
Enhance the UI for each table and button
Style the button and background of page.
Run the project locally.
Access the application at http://localhost:5173/
Test adding, editing, and deleting both users and roles.
Add dynamic validation for forms (eg. email format, required fields).
Create reusable components like ModalForm for editing data.
Simulate APIs with mock JSON data or a library like json-server.