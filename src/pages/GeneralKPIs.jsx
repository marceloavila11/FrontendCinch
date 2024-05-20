import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/GeneralKPIs.css';
import aqImage from '../images/aq_kpis.png';
import lmImage from '../images/lm_kpis.png';
import isaImage from '../images/isa_kpis.png';
import dispoImage from '../images/dispo_kpis.png';
import tcImage from '../images/tc_kpis.png';

const GeneralKPIs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [aqImage, lmImage, isaImage, dispoImage, tcImage];
  const titles = ["AQ KPIs", "LM KPIs", "ISA KPIs", "DISPO KPIs", "TC KPIs"];
  const navigate = useNavigate();

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleImageClick = (index) => {
    if (titles[index] === "AQ KPIs") {
      navigate('/dashboard/general-kpis/aq-kpis');
    }
    if (titles[index] === "LM KPIs") {
      navigate('/dashboard/general-kpis/lm-kpis');
    }
    if (titles[index] === "ISA KPIs") {
      navigate('/dashboard/general-kpis/isa-kpis');
    }
    if (titles[index] === "DISPO KPIs") {
      navigate('/dashboard/general-kpis/dispo-kpis');
    }
    if (titles[index] === "TC KPIs") {
      navigate('/dashboard/general-kpis/tc-kpis');
    }
    // Puedes agregar más condiciones para otros títulos si es necesario
  };

  return (
    <div className="kpis-container">
      <header className="kpis-header">
        <h1>General KPIs</h1>
        <p>A summary of key performance indicators</p>
      </header>      

      <section className="kpis-carousel">
        <button className="carousel-control prev" onClick={handlePrevClick}>‹</button>
        <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="carousel-item" key={index} onClick={() => handleImageClick(index)}>
              <h3>{titles[index]}</h3>
              <img src={image} alt={titles[index]} />
            </div>
          ))}
        </div>
        <button className="carousel-control next" onClick={handleNextClick}>›</button>
      </section>

      <section className="kpis-details">
        <h2>Detailed KPIs</h2>
        <table className="kpis-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Target</th>
              <th>Current</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conversion Rate</td>
              <td>5%</td>
              <td>4.8%</td>
              <td>🔴</td>
            </tr>
            <tr>
              <td>New Leads</td>
              <td>200</td>
              <td>180</td>
              <td>🟡</td>
            </tr>
            <tr>
              <td>Sales Revenue</td>
              <td>$50,000</td>
              <td>$55,000</td>
              <td>🟢</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default GeneralKPIs;
