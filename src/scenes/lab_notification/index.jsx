import React from 'react';

const NotificationSection = () => {
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

  return (
    <div style={sectionStyle}>
      <h2>Notifications</h2>
      <ul style={ulStyle}>
        <li style={liStyle}>Booking Confirmed - Test XYZ</li>
        <li style={liStyle}>Order Accepted - Sample Collector arriving at 10 AM</li>
        <li style={liStyle}>Report Ready - Blood Test</li>
      </ul>
    </div>
  );
};

export default NotificationSection;