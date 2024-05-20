// src/components/Table.jsx

import React from 'react';
import '../css/table.css';

const Table = ({ title, data }) => (
  <div className="table-container">
    <h2>{title}</h2>
    <table className="data-table">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
