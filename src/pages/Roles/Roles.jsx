import React from 'react';
import './Roles.css'; // Import the CSS file
import { FaCheck, FaTimes } from 'react-icons/fa'; // Icons for tick and cross

const rolesData = [
  { id: 1, role: 'Admin', permissions: { read: true, write: true, modify: true } },
  { id: 2, role: 'Editor', permissions: { read: true, write: true, modify: false } },
  { id: 3, role: 'Viewer', permissions: { read: true, write: false, modify: false } },
];

const Roles = () => {
  return (
    <div className="roles-table-container">
      <h2 className="table-title">Roles Management</h2>
      <table className="roles-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Read</th>
            <th>Write</th>
            <th>Modify</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rolesData.map((role) => (
            <tr key={role.id}>
              <td>{role.role}</td>
              <td>{role.permissions.read ? <FaCheck className="icon tick" /> : <FaTimes className="icon cross" />}</td>
              <td>{role.permissions.write ? <FaCheck className="icon tick" /> : <FaTimes className="icon cross" />}</td>
              <td>{role.permissions.modify ? <FaCheck className="icon tick" /> : <FaTimes className="icon cross" />}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="remove-button">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;
