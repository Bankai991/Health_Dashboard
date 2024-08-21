import React from 'react';

const PrescriptionUploadSection = () => {
  const sectionStyle = {
    marginLeft : '285px',
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
      <h2>Prescription Upload</h2>
      <input type="file" />
      <button style={buttonStyle}>Upload and Compare Prices</button>
      <ul style={ulStyle}>
        <li style={liStyle}>Test ABC - $50</li>
        <li style={liStyle}>Test XYZ - $70</li>
      </ul>
      <button style={buttonStyle}>Book Now</button>
    </div>
  );
};

export default PrescriptionUploadSection;
