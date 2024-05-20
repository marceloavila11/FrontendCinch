// src/components/animation.js

import React from 'react';
import '../css/animation.css';
import cinchIcon from '../images/logo-red.png'; // Asegúrate de tener este ícono

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <img src={cinchIcon} alt="Cinch Icon" className="loading-icon" />
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
