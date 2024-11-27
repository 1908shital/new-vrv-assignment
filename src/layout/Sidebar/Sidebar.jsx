import { useEffect, useState, useContext } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { SidebarContext } from '../../context/sidebarContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    setSidebarClass(isSidebarOpen ? 'sidebar-change' : '');
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_one} alt="profile image" />
        </div>
        <span className="info-name">Shital Chaudhary</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((link) => (
            <li className="nav-item" key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <img src={link.image} className="nav-link-icon" alt={link.title} />
                <span className="nav-link-text">{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
