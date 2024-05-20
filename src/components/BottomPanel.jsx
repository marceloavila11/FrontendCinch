// src/components/BottomPanel.jsx

import React, { useState } from 'react';
import '../css/bottomPanel.css';

const BottomPanel = ({ onViewChange }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`bottom-panel ${isMinimized ? 'minimized' : ''}`}>
      <div className="panel-header">
        <span className="panel-title">Options</span>
        <button className="toggle-button" onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? '🔼' : '🔽'}
        </button>
      </div>
      {!isMinimized && (
        <div className="panel-content">
          <button onClick={() => onViewChange('day')}>
            <i className="fa fa-calendar-day"></i> Diario
          </button>
          <button onClick={() => onViewChange('week')}>
            <i className="fa fa-calendar-week"></i> Semanal
          </button>
          <button onClick={() => onViewChange('month')}>
            <i className="fa fa-calendar-alt"></i> Mensual
          </button>
        </div>
      )}
    </div>
  );
};

export default BottomPanel;
