import React from 'react';

const PrescriptionUploadSection = () => {
  const sectionStyle = {
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f7f9fc',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headerStyle = {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  };

  const liStyle = {
    margin: '10px 0',
    fontSize: '18px',
    color: '#555',
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
  };

  const buttonSecondaryStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    marginTop: '10px',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headerStyle}>Upload Your Prescription</h2>
      <input type="file" style={inputStyle} />
      <button style={buttonStyle}>Upload and Compare Prices</button>
      <ul style={ulStyle}>
        <li style={liStyle}>Test ABC - $50</li>
        <li style={liStyle}>Test XYZ - $70</li>
        <li style={liStyle}>Blood Test - $30</li>
        <li style={liStyle}>X-Ray - $100</li>
        <li style={liStyle}>MRI Scan - $500</li>
        <li style={liStyle}>CT Scan - $450</li>
        <li style={liStyle}>Ultrasound - $120</li>
        <li style={liStyle}>Complete Blood Count (CBC) - $40</li>
        <li style={liStyle}>Lipid Profile - $60</li>
        <li style={liStyle}>Thyroid Panel - $80</li>
      </ul>
      <button style={buttonSecondaryStyle}>Book Now</button>
    </div>
  );
};

export default PrescriptionUploadSection;
