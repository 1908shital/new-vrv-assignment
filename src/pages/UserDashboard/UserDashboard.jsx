import React from 'react';
import './UserDashboard.css'; // Importing CSS for styling

const UserDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Welcome to the User Dashboard</h1>
            </div>
            <div className="dashboard-cards">
                <div className="card">
                    <h3 className="card-title">Total Number of Guest Cards</h3>
                    <p className="card-content">5</p> {/* Example count */}
                </div>
                <div className="card">
                    <h3 className="card-title">How to Manage Guest Cards</h3>
                    <p className="card-content">
                        To manage guest cards, click on the "Manage" button. You can view, edit, and delete guest details from there.
                    </p>
                </div>
                <div className="card">
                    <h3 className="card-title">Today's Work</h3>
                    <ul className="todo-list">
                        <li>Complete the guest card review</li>
                        <li>Follow up on pending invitations</li>
                        <li>Prepare presentation for tomorrow's meeting</li>
                    </ul>
                </div>
                <div className="card">
                    <h3 className="card-title">Pending Assignments</h3>
                    <ul className="todo-list">
                        <li>Review guest card updates</li>
                        <li>Complete system documentation</li>
                        <li>Finalize the guest list for the event</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
