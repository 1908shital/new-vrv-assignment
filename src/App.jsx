import './App.css'; // Importing your styles
import Sidebar from './layout/Sidebar/Sidebar'; // Sidebar component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/User';
import Roles from './pages/Roles/Roles';
import UserManagement from './pages/UserManagement/UserManagement';
import Permissions from './pages/Permissions/Permissions';

const App = () => {
  return (
    <div className="app"> {/* Wrapper with your 'app' CSS class */}
      <Router>
        <Sidebar /> {/* Sidebar always visible */}
        <div className="content"> {/* Add a wrapper for main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/permissions" element={<Permissions />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
