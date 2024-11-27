import React from 'react';
import './User.css'; // Import the CSS file

const usersData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', permissions: 'Full Access' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', permissions: 'Edit, View' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Viewer', permissions: 'View Only' },
];

const User = () => {
  return (
    <div className="user-table-container">
      <h2 className="table-title">User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.permissions}</td>
              <td>
                <button className="edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
