// src/components/pages/Home.js
import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to the Dashboard</h1>
        <p>Select a menu item to view its contents.</p>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <h2>Overview</h2>
          <p>Get a quick overview of your KPIs and performance metrics.</p>
        </div>
        <div className="home-section">
          <h2>Scrapers Data</h2>
          <p>Access detailed data collected by our scrapers.</p>
        </div>
        <div className="home-section">
          <h2>General KPIs</h2>
          <p>View comprehensive KPIs for different departments.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
