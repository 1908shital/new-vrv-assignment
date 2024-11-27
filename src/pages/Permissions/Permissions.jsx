import React, { useState } from 'react';
import './Permissions.css';

const permissionsData = [
  { id: 1, permission: 'View Dashboard' },
  { id: 2, permission: 'Edit Profile' },
  { id: 3, permission: 'Manage Users' },
  { id: 4, permission: 'Delete Posts' },
  { id: 5, permission: 'Access Reports' },
  // Add more permissions here if needed
];

const Permissions = () => {
  const [permissions, setPermissions] = useState(permissionsData);

  const handleDeletePermission = (id) => {
    setPermissions(permissions.filter(permission => permission.id !== id));
  };

  return (
    <div className="permissions-container">
      <h2 className="permissions-title">Manage Permissions</h2>
      <table className="permissions-table">
        <thead>
          <tr>
            <th>Permission</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map(permission => (
            <tr key={permission.id}>
              <td>{permission.permission}</td>
              <td>
                <button 
                  className="delete-button" 
                  onClick={() => handleDeletePermission(permission.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Permissions;
