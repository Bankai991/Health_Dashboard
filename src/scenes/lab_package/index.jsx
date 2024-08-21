import React from 'react';

const PackageSection = () => {
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

  return (
    <div style={sectionStyle}>
      <h2>Packages & Offers</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>Health Checkup - $199</li>
        <li style={liStyle}>Diabetes Package - $150</li>
        <li style={liStyle}>Cardiac Package - $250</li>
      </ul>
      <button style={buttonStyle}>Book Package</button>
    </div>
  );
};

export default PackageSection;
