import React, { useState } from 'react';

// Card component
const Card = ({ title, description, price, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

    return (
      <div
            style={isHovered ? { ...styles.card, ...styles.cardHover } : styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.cardContent}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Price: {price}</strong></p>
            </div>
            <button style={styles.bookButton} onClick={onClick}>Choose the Package</button>
        </div>
    );
};

// Dummy data
const packagesAndOffers = [
    { title: 'Basic Health Check', description: 'Includes basic health screening.', price: '$50' },
    { title: 'Premium Health Check', description: 'Includes advanced health screening.', price: '$100' },
    { title: 'Wellness Package', description: 'Includes wellness check and consultation.', price: '$75' },
    { title: 'Advanced Wellness Package', description: 'Includes in-depth wellness check and consultation.', price: '$150' },
    { title: 'Routine Blood Test', description: 'Standard blood tests.', price: '$30' },
    { title: 'Comprehensive Blood Test', description: 'Detailed blood tests.', price: '$60' },
    { title: 'Executive Health Check', description: 'Executive health screening package.', price: '$120' },
    { title: 'Travel Health Package', description: 'Health check for travelers.', price: '$90' },
    { title: 'Pregnancy Check Package', description: 'Complete pregnancy health package.', price: '$200' },
];

const Dashboard = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    const handleBookClick = (pkg) => {
        setSelectedPackage(pkg);
    };

    const handleClosePopup = () => {
        setSelectedPackage(null);
    };

    return (
        <div>
            <div style={styles.dashboard}>
                {packagesAndOffers.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        onClick={() => handleBookClick(item)}
                    />
                ))}
            </div>

            {selectedPackage && (
                <div style={styles.popupOverlay}>
                    <div style={styles.popup}>
                        <h2>{selectedPackage.title}</h2>
                        <p>{selectedPackage.description}</p>
                        <p><strong>Price: {selectedPackage.price}</strong></p>
                        <p><strong>Time Taken:</strong> 30 minutes</p>
                        <p><strong>Conditions:</strong> Must be booked 24 hours in advance.</p>
                        <button
                            style={styles.bookNowButton}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            Book Now
                        </button>
                        <button
                            style={styles.closeButton}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            onClick={handleClosePopup}
                            >
                              Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Inline styles
const styles = {
    dashboard: {
      marginLeft: '285px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        transition: 'transform 0.3s ease-in-out',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '250px',
        height: '300px',
    },
    cardHover: {
      transform: 'scale(1.05)', // Zoom effect on hover
    },
    cardContent: {
        marginBottom: '16px',
        fontSize:'1.2em',
    },
    bookButton: {
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        fontSize: '1em',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    popupOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popup: {
        backgroundColor: '#118266',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '400px',
        height: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontSize:'1.2em',
        justifyContent: 'center',
        alignItems:'center',
    },
    bookNowButton: {
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#28a745',
        color: 'white',
        fontSize: '1em',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '10px',
    },
    closeButton: {
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#dc3545',
        color: 'white',
        fontSize: '1em',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '10px',
    }
};

export default Dashboard;
