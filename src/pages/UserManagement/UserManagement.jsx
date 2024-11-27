import React from 'react';
import './UserManagement.css'; // Import the CSS file
import { usersData } from '../../data/data'; // Import data from data.js

const UserManagement = () => {
  return (
    <div className="user-management-container">
      <h2 className="page-title">User Management</h2>
      <div className="cards-container">
        {usersData.map((user, index) => (
          <div className="user-card" key={index}>
            <div className="user-card-header">
              <h3>{user.name}</h3>
              <span className="user-role">{user.role}</span>
            </div>
            <div className="user-card-body">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Date of Birth:</strong> {user.dob}</p>
              <p><strong>Phone Number:</strong> {user.phone}</p>
              <p><strong>Permissions:</strong> {user.permissions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
