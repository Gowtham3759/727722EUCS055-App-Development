import React, { useState, useEffect ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { UserContext } from './UserContext';

const Navbar = ({ handleLogout, userName }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userName1 } = useContext(UserContext);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.account-icon')) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>EduPortal</div>
      <div className="navbar-links">
        <div className="navbar-link" onClick={() => navigate('/admin')}>Admin Login</div>
        <div className="account-icon" onClick={toggleDropdown} role="button" aria-haspopup="true" aria-expanded={dropdownOpen}>
        <div className="navbar-link">{userName1?userName1:'Guest'}</div>
          <FaUserCircle size={24} />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item user-info">
                <span className="user-name">{userName}</span>
              </div>
              <div className="dropdown-item" onClick={() => navigate('/profile')}>Profile</div>
              <div className="dropdown-item" onClick={() => navigate('/settings')}>Settings</div>
              <div className="dropdown-item logout-item" onClick={handleLogout}>
                <FaSignOutAlt size={16} />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;