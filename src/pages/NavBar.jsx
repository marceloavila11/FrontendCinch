// src/pages/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar({ onToggleSidebar }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggleSidebar();
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <ul>
        <li className="toggle-item">
          <button id="toggle-link" onClick={toggleSidebar}>
            <span className="icon">{isCollapsed ? '▶️' : '🔽'}</span>
            <span className="text">{isCollapsed ? '' : 'Hide'}</span>
          </button>
        </li>
        <li>
          <Link to="/dashboard">
            <span className="icon">🏠</span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li className="submenu-container">
          <Link to="#">
            <span className="icon">📊</span>
            <span className="text">Scrapers Data</span>
          </Link>
          <ul className="submenu">
            <li><Link to="#"><span className="icon">📄</span><span className="text">Redfin</span></Link></li>
            <li><Link to="#"><span className="icon">📃</span><span className="text">Eig</span></Link></li>
            <li><Link to="#"><span className="icon">💹</span><span className="text">Rate</span></Link></li>
          </ul>
        </li>
        <li className="submenu-container">
          <Link to="/dashboard/general-kpis">
            <span className="icon">📈</span>
            <span className="text">General KPIs</span>
          </Link>
          <ul className="submenu">
            <li><Link to="/dashboard/general-kpis/aq-kpis"><span className="icon">⚙️</span><span className="text">AQ KPIs</span></Link></li>
            <li><Link to="/dashboard/general-kpis/lm-kpis"><span className="icon">📊</span><span className="text">LM KPIs</span></Link></li>
            <li><Link to="/dashboard/general-kpis/isa-kpis"><span className="icon">📈</span><span className="text">ISA KPIs</span></Link></li>
            <li><Link to="/dashboard/general-kpis/dispo-kpis"><span className="icon">📉</span><span className="text">DISPO KPIs</span></Link></li>
            <li><Link to="/dashboard/general-kpis/tc-kpis"><span className="icon">🔍</span><span className="text">TC KPIs</span></Link></li>
          </ul>
        </li>
        <li>
          <Link to="#">
            <span className="icon">👤</span>
            <span className="text">My KPIs</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span className="icon">🔒</span>
            <span className="text">Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
