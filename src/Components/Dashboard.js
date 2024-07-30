import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Dashboard.css';
import Navbar from './Navbar';
import Home from './Home';
import EducationalContent from './EducationalContent';
import LMS from './LMS';
import OnlineClasses from './OnlineClasses';
import SIS from './SIS';
import CommunicationTools from './CommunicationTools';
import Assessment from './Assessment';
import ResourceLibrary from './ResourceLibrary';
import Settings from './Settings';
import Flippy from './Flipbooks/Flippy';
import SidePanel from './SidePanel';
import Animation from './Animations';
import Payment from './Payments';
import Contact from './Contact';
import QuizContainer from './Quiz/QuizContainer'

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('home');
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <Home />;
      case 'educational-content':
        return <EducationalContent />;
      case 'Videos':
        return <Animation />;
      case 'online-classes':
        return <OnlineClasses />;
      case 'sis':
        return <QuizContainer />;
      case 'communication-tools':
        return <Contact />;
      case 'assessment':
        return <Assessment />;
      case 'resource-library':
        return <Payment />;
      case 'settings':
        return <Settings />;
      case 'storybook':
        return <Flippy />;
      default:
        return <div className="content-panel">Select a section</div>;
    }
  };

  const shouldDisplayHeading = activeView !== 'home';

  return (
    <div className={`dashboard-container ${collapsed ? 'collapsed' : ''}`}>
      <Navbar handleLogout={handleLogout} />
      <div className="dashboard-content">
        <SidePanel 
          activeView={activeView}
          onViewChange={setActiveView}
          onCollapse={handleCollapse}
          collapsed={collapsed}
        />
        <main className="main-section">
          {/* {shouldDisplayHeading && (
            <h1 className="main-title">{activeView.charAt(0).toUpperCase() + activeView.slice(1).replace('-', ' ')}</h1>
          )} */}
          <CSSTransition
            in={true}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            {renderContent()}
          </CSSTransition>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
