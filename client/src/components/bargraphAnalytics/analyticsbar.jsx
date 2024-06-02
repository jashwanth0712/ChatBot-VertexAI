// HorizontalBarChart.js
import React from 'react';

const data = [
  { label: 'A', percentage: 73, color: '#fecc07' },
  { label: 'B', percentage: 61, color: '#fecc07' },
  { label: 'C', percentage: 42, color: '#fecc07' },
  { label: 'D', percentage: 18, color: '#fecc07' },
];

const HorizontalBarChart = () => {
  return (
    <div style={{ padding: '10px', borderRadius: '10px', width: '150px', boxSizing: 'border-box' }}>
      {data.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '3px' }}>
          <span className="text-xs" style={{ width: '5px', color: 'white', textAlign: 'right',margin:'0 6px' }}>{item.label}</span>
          <div style={{ flex: 1, background: '#FFEB9B', margin: '2px' }}>
            <div
              style={{
                width: `${item.percentage}%`,
                background: item.color,
                height: '20px',
                
                textAlign: 'right',
                
                
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              
            >
              <p className="text-black" style={{ fontSize: '5px' }}>{item.percentage}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalBarChart;
