import "./App.css"; // Importing your styles
import Sidebar from "./layout/Sidebar/Sidebar"; // Sidebar component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/User";
import Roles from "./pages/Roles/Roles";
import UserManagement from "./pages/UserManagement/UserManagement";
import Permissions from "./pages/Permissions/Permissions";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import GuestDashboard from "./pages/GuestDashboard/GuestDashboard";

const App = () => {
  return (
    <div className="app">
      {" "}
      {/* Wrapper with your 'app' CSS class */}
      <Router>
        <Sidebar /> {/* Sidebar always visible */}
        <div className="content">
          {" "}
          {/* Add a wrapper for main content */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/permissions" element={<Permissions />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/guest" element={<GuestDashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
