import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../css/Dashboard.css';
import NavBar from './NavBar';
import Home from './Home';
import GeneralKPIs from './GeneralKPIs';
import AQKPIs from './generalKPIs/aqKPIs';
import LMKPIs from './generalKPIs/lmKPIs';
import DISPOKPIs from './generalKPIs/dispoKPIs';
import TCKPIs from './generalKPIs/tcKPIs';
import ISAKPIs from './generalKPIs/isaKPIs';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`dashboard-container ${isCollapsed ? 'collapsed' : ''}`}>
      <NavBar onToggleSidebar={toggleNavBar} />
      <div className="content-container">
        <div className="header-bar">
          <div className="header-text">Cinch Server</div>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="general-kpis" element={<GeneralKPIs />} />
            <Route path="general-kpis/aq-kpis" element={<AQKPIs />} />
            <Route path="general-kpis/lm-kpis" element={<LMKPIs />} />
            <Route path="general-kpis/dispo-kpis" element={<DISPOKPIs />} />
            <Route path="general-kpis/tc-kpis" element={<TCKPIs />} />
            <Route path="general-kpis/isa-kpis" element={<ISAKPIs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
