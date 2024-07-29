// SidePanel.js
import React from 'react';
import { FaHome, FaBook, FaChalkboardTeacher, FaGraduationCap, FaUser, FaEnvelope, FaCheckCircle, FaBookOpen, FaCog, FaAlignLeft } from 'react-icons/fa';
import './SidePanel.css';

const SidePanel = ({ activeView, onViewChange, onCollapse, collapsed }) => {
  return (
    <aside className={`side-panel-container ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-button" onClick={onCollapse}>
        <FaAlignLeft />
      </button>
      <ul className="side-panel-links">
        {[
          { key: 'home', icon: <FaHome />, text: 'Home' },
          { key: 'educational-content', icon: <FaBook />, text: 'Educational Content' },
          { key: 'lms', icon: <FaChalkboardTeacher />, text: 'LMS' },
          { key: 'online-classes', icon: <FaGraduationCap />, text: 'Online Classes' },
          { key: 'sis', icon: <FaUser />, text: 'SIS' },
          { key: 'communication-tools', icon: <FaEnvelope />, text: 'Communication Tools' },
          { key: 'assessment', icon: <FaCheckCircle />, text: 'Assessment' },
          { key: 'resource-library', icon: <FaBookOpen />, text: 'Resource Library' },
          { key: 'storybook', icon: <FaBookOpen />, text: 'Storybook' },
          { key: 'settings', icon: <FaCog />, text: 'Settings' }
        ].map(({ key, icon, text }) => (
          <li key={key}>
            <button
              className={`side-panel-link ${activeView === key ? 'active' : ''}`}
              onClick={() => onViewChange(key)}
            >
              <div className={`side-panel-icon ${activeView === key ? 'active' : ''}`}>
                {icon}
              </div>
              {!collapsed && <span className="side-panel-text">{text}</span>}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidePanel;
