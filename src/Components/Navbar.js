// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>EduPortal</div>
      <div className="navbar-links">
        <a href="#profile" className="navbar-link">Profile</a>
        <a href="#settings" className="navbar-link">Settings</a>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;