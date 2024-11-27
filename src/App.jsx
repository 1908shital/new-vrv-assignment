import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import GuestDashboard from "./pages/GuestDashboard/GuestDashboard";
import AdminDashboard from "./pages/AdminDashboard"; // Import the new AdminDashboard component
import {jwtDecode} from "jwt-decode"; // Correct import for jwt-decode

const App = () => {
  const token = localStorage.getItem("token");
  let role = null;

  if (token) {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  }

  return (
    <div className="app">
      <Router>
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<AdminDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/guest" element={<GuestDashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
