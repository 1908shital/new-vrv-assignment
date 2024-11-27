import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './GuestDashboard.css'; // Import the CSS file for styling

const GuestDashboard = () => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Welcome to the Guest Dashboard</h1>
      </div>
      <div className="dashboard-cards">
        <div className="card">
          <h3 className="card-title">Thought of the Day</h3>
          <p className="card-content">"The best way to predict the future is to create it." - Abraham Lincoln</p>
        </div>
        <div className="card">
          <h3 className="card-title">Today's News</h3>
          <p className="card-content">Breaking: Market shows signs of recovery after recent slump.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Weather Report</h3>
          <p className="card-content">Sunny with a high of 24°C and a low of 16°C. Light breeze.</p>
        </div>
        <div className="card">
          <h3 className="card-title">To-Do</h3>
          <ul className="todo-list">
            <li>Complete React Project</li>
            <li>Attend Team Meeting at 3:00 PM</li>
            <li>Submit report by 5:00 PM</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-title">Places to Visit</h3>
          <ul className="places-list">
            <li>The Grand Canyon</li>
            <li>Eiffel Tower</li>
            <li>Great Wall of China</li>
            <li>Taj Mahal</li>
          </ul>
        </div>
      </div>

      {/* Logout Button */}
      <div className="logout-btn-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default GuestDashboard;
