import React from 'react';

const ReportSection = () => {
  const sectionStyle = {
    marginLeft: '285px',
    padding: '20px',
    borderRadius: '5px',
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const liStyle = {
    margin: '10px 0',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={sectionStyle}>
      <h2>Reports</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>Blood Test - Completed</li>
        <li style={liStyle}>Urine Test - Pending</li>
        <li style={liStyle}>ECG - Ready for Download</li>
      </ul>
      <button style={buttonStyle} onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')} onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}>
        Update Report
      </button>
    </div>
  );
};

export default ReportSection;
