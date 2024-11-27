import React from "react";
import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/User";
import Roles from "./pages/Roles/Roles";
import UserManagement from "./pages/UserManagement/UserManagement";
import Permissions from "./pages/Permissions/Permissions";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import GuestDashboard from "./pages/GuestDashboard/GuestDashboard";
import {jwtDecode} from "jwt-decode"; // Remove destructuring

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
        {role === "Admin" && <Sidebar />} {/* Sidebar only visible for Admin */}
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            

            {/* Role-Based Routes */}
            {role === "Admin" && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/user-management" element={<UserManagement />} />
                <Route path="/permissions" element={<Permissions />} />
              </>
            )}
            {role === "User" && <Route path="/user" element={<UserDashboard />} />}
            {role === "Guest" && <Route path="/guest" element={<GuestDashboard />} />}

            
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
