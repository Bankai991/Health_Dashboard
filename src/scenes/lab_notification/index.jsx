import React from 'react';

const notifications = [
  { id: 1, type: "Order Accepted", message: "Your order has been accepted.", time: "2 mins ago" },
  { id: 2, type: "Sample Collector", message: "Sample collector will arrive at 10:30 AM.", time: "15 mins ago" },
  { id: 3, type: "Booking Done", message: "Your booking has been confirmed.", time: "1 hour ago" },
  { id: 4, type: "Reports Done", message: "Your reports are ready.", time: "3 hours ago" },
  { id: 5, type: "Pending Payment", message: "Your payment is pending.", time: "Yesterday" },
  { id: 6, type: "Order Accepted", message: "Your order has been accepted.", time: "2 days ago" },
  { id: 7, type: "Sample Collector", message: "Sample collector is on the way.", time: "3 days ago" },
  { id: 8, type: "Booking Done", message: "Booking successfully completed.", time: "4 days ago" },
  { id: 9, type: "Reports Done", message: "Your reports have been emailed to you.", time: "5 days ago" },
];

const NotificationList = () => {
  const notificationListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '25px',
    backgroundColor: '#f1f3f5',
    borderRadius: '12px',
    justifyContent: 'center',
  };

  const notificationItemStyle = {
    padding: '15px',
    backgroundColor: '#ffffff',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    cursor: 'pointer',
    textAlign: 'left',
  };

  const notificationItemHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const notificationTypeStyle = {
    fontWeight: 'bold',
    color: '#495057',
    fontSize: '1.1em',
  };

  const notificationMessageStyle = {
    marginTop: '10px',
    color: '#6c757d',
    fontSize: '0.95em',
  };

  const notificationTimeStyle = {
    marginTop: '10px',
    fontSize: '0.85em',
    color: '#adb5bd',
    textAlign: 'right',
  };

  return (
    <div style={notificationListStyle}>
      {notifications.map((notif) => (
        <div
          key={notif.id}
          style={notificationItemStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = notificationItemHoverStyle.transform;
            e.currentTarget.style.boxShadow = notificationItemHoverStyle.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={notificationTypeStyle}>{notif.type}</div>
          <div style={notificationMessageStyle}>{notif.message}</div>
          <div style={notificationTimeStyle}>{notif.time}</div>
        </div>
      ))}
    </div>
  );
};

const LabNotification = () => {
  const labNotificationDashboardStyle = {
    marginLeft: '285px',
    padding: '40px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#343a40',
  };

  return (
    <div style={labNotificationDashboardStyle}>
      <h2>Laboratory Notifications</h2>
      <NotificationList />
    </div>
  );
};

export default LabNotification;
