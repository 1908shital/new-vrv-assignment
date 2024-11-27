import React from 'react';
import './UserManagement.css'; // Import the CSS file
import { usersData } from '../../data/data'; // Import data from data.js

const UserManagement = () => {
  return (
    <div className="user-management-container grid-common">
      <h2 className="page-title text-white">User Management</h2>
      <div className="cards-container">
        {usersData.map((user, index) => (
          <div className="user-card grid-item" key={index}>
            <div className="user-card-header grid-c-title">
              <h3 className="user-name text-silver-v1">{user.name}</h3>
              <span className="user-role text-scarlet">{user.role}</span>
            </div>
            <div className="user-card-body">
              <p><strong className="text-silver-v1">Email:</strong> {user.email}</p>
              <p><strong className="text-silver-v1">Date of Birth:</strong> {user.dob}</p>
              <p><strong className="text-silver-v1">Phone Number:</strong> {user.phone}</p>
              <p><strong className="text-silver-v1">Permissions:</strong> {user.permissions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
