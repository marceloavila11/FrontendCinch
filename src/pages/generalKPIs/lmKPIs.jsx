// src/pages/generalKPIs/LmKPIs.jsx

import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import LineChart from '../../components/Linechart';
import LoadingAnimation from '../animation';
import BottomPanel from '../../components/BottomPanel';
import '../../css/lmKPIs.css';

const LmKPIs = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [view, setView] = useState('week');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const fetchData = async () => {
      // Simulated fetch data for LM
      const fetchedData = {
        table: {
          title: `LM KPIs from this ${view}`,
          headers: view === 'day' ? ['Metric', 'Daily Goal', 'Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5']
                   : view === 'week' ? ['Metric', 'Daily Goal', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
                   : ['Metric', 'Daily Goal', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
          rows: [
            ['LM Team general calls', '46', '81', '33', '46', '112', '63'],
            ['LM Team spoken calls', '12', '14', '2', '14', '15', '8'],
            ['LM Team Leads generated', '4', '4', '0', '2', '3', '2'],
          ],
        },
        chart: {
          labels: view === 'day' ? ['Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5']
                  : view === 'week' ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
                  : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'LM Team General Calls',
              data: view === 'day' ? [20, 30, 40, 50, 60] : view === 'week' ? [81, 33, 46, 112, 63] : [500, 600, 700, 800],
              fill: false,
              backgroundColor: 'rgba(75, 192, 192, 1)',
              borderColor: 'rgba(75, 192, 192, 1)',
            },
            {
              label: 'LM Team Spoken Calls',
              data: view === 'day' ? [10, 20, 30, 40, 50] : view === 'week' ? [14, 2, 14, 15, 8] : [200, 300, 400, 500],
              fill: false,
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderColor: 'rgba(54, 162, 235, 0.7)',
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
    <div className="lm-kpis-container">
      <Table title={data.table.title} data={data.table} />
      <LineChart data={data.chart} />
      <BottomPanel onViewChange={setView} />
    </div>
  );
};

export default LmKPIs;
