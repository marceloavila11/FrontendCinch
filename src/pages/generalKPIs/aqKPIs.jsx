// src/pages/generalKPIs/AqKPIs.jsx

import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import LineChart from '../../components/Linechart';
import LoadingAnimation from '../animation';
import BottomPanel from '../../components/BottomPanel';
import '../../css/aqKPIs.css';

const AqKPIs = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [view, setView] = useState('week');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const fetchData = async () => {
      // Simulated fetch data
      const fetchedData = {
        table: {
          title: `AQ KPIs from this ${view}`,
          headers: view === 'day' ? ['Metric', 'Daily Goal', 'Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5']
                   : view === 'week' ? ['Metric', 'Daily Goal', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
                   : ['Metric', 'Daily Goal', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
          rows: [
            ['AQ Team general calls', '126', '113', '174', '87', '162', '129'],
            ['AQ Team spoken calls', '32', '49', '51', '32', '41', '34'],
            ['Offers sent', '11', '3', '6', '4', '6', '4'],
            ['Seller contracts sent', '2', '1', '3', '2', '1', '2'],
            ['Seller contracts signed', '1', '0', '0', '1', '0', '0'],
          ],
        },
        chart: {
          labels: view === 'day' ? ['Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5']
                  : view === 'week' ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
                  : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'AQ Team General Calls',
              data: view === 'day' ? [20, 30, 40, 50, 60] : view === 'week' ? [113, 174, 87, 162, 129] : [500, 600, 700, 800],
              fill: false,
              backgroundColor: 'rgba(193, 39, 45, 1)',
              borderColor: 'rgba(193, 39, 45, 1)',
            },
            {
              label: 'AQ Team Spoken Calls',
              data: view === 'day' ? [10, 20, 30, 40, 50] : view === 'week' ? [49, 51, 32, 41, 34] : [200, 300, 400, 500],
              fill: false,
              backgroundColor: 'rgba(193, 39, 45, 0.7)',
              borderColor: 'rgba(193, 39, 45, 0.7)',
            },
            // Additional datasets...
          ],
        },
      };

      setData(fetchedData);
    };

    fetchData();

    return () => clearTimeout(timer);
  }, [view]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="aq-kpis-container">
      <Table title={data.table.title} data={data.table} />
      <LineChart data={data.chart} />
      <BottomPanel onViewChange={setView} />
    </div>
  );
};

export default AqKPIs;
