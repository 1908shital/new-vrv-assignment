import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../layout/Sidebar/Sidebar";
import Home from "../pages/Home/Home";
import Users from "../pages/Users/User";
import Roles from "../pages/Roles/Roles";
import UserManagement from "../pages/UserManagement/UserManagement";
import Permissions from "../pages/Permissions/Permissions";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar /> {/* Sidebar is always displayed */}
      <div className="admin-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/permissions" element={<Permissions />} />
          {/* Redirect to /home if no specific route is matched */}
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
