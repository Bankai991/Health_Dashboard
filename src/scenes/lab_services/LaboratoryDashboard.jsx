import { border, height } from '@mui/system';
import React, { useState } from 'react';

// Sample data (unchanged)
const labs = [
  {
    id: 1,
    name: "ABC Diagnostics",
    description: "A leading diagnostic center specializing in pathology and microbiology.",
    location: "123 Health St, City",
    contact: "123-456-7890",
    services: [
      { name: "Blood Tests", 
        price: "$50",
        time: "30 mins",
        image: "path_to_image/blood_test.jpg",
        description: "Comprehensive blood testing services."
      },
      { name: "Urine Tests",
        price: "$30",
        time: "20 mins",
        image: "path_to_image/urine_test.jpg",
        description: "Urinalysis for various conditions."
      },
      { name: "X-rays",
        price: "$100",
        time: "15 mins",
        image: "path_to_image/xray.jpg",
        description: "Digital X-ray imaging."
      }
    ],
    hours: "Mon-Fri: 8 AM - 6 PM",
    rating: 4.5,
    image: "path_to_image/abc_diagnostics.jpg"
  },
  {
    id: 2,
    name: "XYZ Labs",
    description: "Expert lab services with a focus on precision and reliability.",
    location: "456 Wellness Ave, City",
    contact: "987-654-3210",
    services: [
      { 
        name: "MRI", 
        price: "$500", 
        time: "1 hour",
        image: "path_to_image/mri.jpg",
        description: "Magnetic Resonance Imaging."
      },
      { 
        name: "CT Scans", 
        price: "$400", 
        time: "45 mins",
        image: "path_to_image/ct_scan.jpg",
        description: "Computed Tomography scans."
      },
      { 
        name: "Ultrasound", 
        price: "$200", 
        time: "30 mins",
        image: "path_to_image/ultrasound.jpg",
        description: "High-resolution ultrasound imaging."
      }
    ],
    hours: "Mon-Sat: 7 AM - 5 PM",
    rating: 4.8,
    image: "path_to_image/xyz_labs.jpg"
  },
  {
    id: 3,
    name: "HealthFirst Labs",
    description: "Comprehensive diagnostic services with a focus on patient care.",
    location: "789 Health Blvd, City",
    contact: "321-654-0987",
    services: [
      { 
        name: "Cardiac MRI", 
        price: "$600", 
        time: "1.5 hours",
        image: "path_to_image/cardiac_mri.jpg",
        description: "Specialized imaging for cardiac conditions."
      },
      { 
        name: "Blood Glucose Test", 
        price: "$25", 
        time: "10 mins",
        image: "path_to_image/blood_glucose.jpg",
        description: "Glucose level testing."
      }
    ],
    hours: "Mon-Sat: 8 AM - 6 PM",
    rating: 4.6,
    image: "path_to_image/healthfirst_labs.jpg"
  },
  // {
  //   id: 4,
  //   name: "Prime Diagnostics",
  //   description: "State-of-the-art laboratory with the latest diagnostic technology.",
  //   location: "456 Health Blvd, City",
  //   contact: "987-123-4567",
  //   services: [
  //     { 
  //       name: "Thyroid Panel", 
  //       price: "$70", 
  //       time: "25 mins",
  //       image: "path_to_image/thyroid_panel.jpg",
  //       description: "Comprehensive thyroid function testing."
  //     },
  //     { 
  //       name: "Liver Function Test", 
  //       price: "$65", 
  //       time: "20 mins",
  //       image: "path_to_image/liver_function.jpg",
  //       description: "Liver enzyme testing."
  //     }
  //   ],
  //   hours: "Mon-Fri: 7 AM - 7 PM",
  //   rating: 4.7,
  //   image: "path_to_image/prime_diagnostics.jpg"
  // },
  // {
  //   id: 5,
  //   name: "Ultra Labs",
  //   description: "Trusted lab services for over 20 years.",
  //   location: "123 Medical Ave, City",
  //   contact: "654-987-3210",
  //   services: [
  //     { 
  //       name: "CBC Test", 
  //       price: "$40", 
  //       time: "15 mins",
  //       image: "path_to_image/cbc_test.jpg",
  //       description: "Complete Blood Count test."
  //     },
  //     { 
  //       name: "Kidney Function Test", 
  //       price: "$80", 
  //       time: "30 mins",
  //       image: "path_to_image/kidney_function.jpg",
  //       description: "Kidney function analysis."
  //     }
  //   ],
  //   hours: "Mon-Sat: 7 AM - 6 PM",
  //   rating: 4.9,
  //   image: "path_to_image/ultra_labs.jpg"
  // }
];

const labs1 = [
  {
    id: 4,
    name: "Prime Diagnostics",
    description: "State-of-the-art laboratory with the latest diagnostic technology.",
    location: "456 Health Blvd, City",
    contact: "987-123-4567",
    services: [
      { 
        name: "Thyroid Panel", 
        price: "$70", 
        time: "25 mins",
        image: "path_to_image/thyroid_panel.jpg",
        description: "Comprehensive thyroid function testing."
      },
      { 
        name: "Liver Function Test", 
        price: "$65", 
        time: "20 mins",
        image: "path_to_image/liver_function.jpg",
        description: "Liver enzyme testing."
      }
    ],
    hours: "Mon-Fri: 7 AM - 7 PM",
    rating: 4.7,
    image: "path_to_image/prime_diagnostics.jpg"
  },
  {
    id: 5,
    name: "Ultra Labs",
    description: "Trusted lab services for over 20 years.",
    location: "123 Medical Ave, City",
    contact: "654-987-3210",
    services: [
      { 
        name: "CBC Test", 
        price: "$40", 
        time: "15 mins",
        image: "path_to_image/cbc_test.jpg",
        description: "Complete Blood Count test."
      },
      { 
        name: "Kidney Function Test", 
        price: "$80", 
        time: "30 mins",
        image: "path_to_image/kidney_function.jpg",
        description: "Kidney function analysis."
      }
    ],
    hours: "Mon-Sat: 7 AM - 6 PM",
    rating: 4.9,
    image: "path_to_image/ultra_labs.jpg"
  },
  {
    id: 6,
    name: "XYZ Labs",
    description: "Expert lab services with a focus on precision and reliability.",
    location: "456 Wellness Ave, City",
    contact: "987-654-3210",
    services: [
      { 
        name: "MRI", 
        price: "$500", 
        time: "1 hour",
        image: "path_to_image/mri.jpg",
        description: "Magnetic Resonance Imaging."
      },
      { 
        name: "CT Scans", 
        price: "$400", 
        time: "45 mins",
        image: "path_to_image/ct_scan.jpg",
        description: "Computed Tomography scans."
      },
      { 
        name: "Ultrasound", 
        price: "$200", 
        time: "30 mins",
        image: "path_to_image/ultrasound.jpg",
        description: "High-resolution ultrasound imaging."
      }
    ],
    hours: "Mon-Sat: 7 AM - 5 PM",
    rating: 4.8,
    image: "path_to_image/xyz_labs.jpg"
  }
];

const LabListingPage = () => {
  const [selectedLab, setSelectedLab] = useState(null);
  const [selectedLabsForComparison, setSelectedLabsForComparison] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    rating: '',
    price: '',
    insurance: '',
    authentication: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const handleLabComparison = (lab) => {
    setSelectedLabsForComparison((prevLabs) =>
      prevLabs.includes(lab) ? prevLabs.filter(l => l !== lab) : [...prevLabs, lab]
    );
  };

  const filteredLabs = labs.filter((lab) => {
    return (
      (filters.rating ? lab.rating >= parseFloat(filters.rating) : true) &&
      (filters.price ? lab.services.some(service => parseFloat(service.price.replace('$', '')) <= parseFloat(filters.price)) : true) &&
      // Assuming labs have these properties in their data
      (filters.insurance ? lab.insurance === filters.insurance : true) &&
      (filters.authentication ? lab.authentication.includes(filters.authentication) : true)
    );
  })
  const filteredLabs1 = labs1.filter((lab) => {
    return (
      (filters.rating ? lab.rating >= parseFloat(filters.rating) : true) &&
      (filters.price ? lab.services.some(service => parseFloat(service.price.replace('$', '')) <= parseFloat(filters.price)) : true) &&
      // Assuming labs have these properties in their data
      (filters.insurance ? lab.insurance === filters.insurance : true) &&
      (filters.authentication ? lab.authentication.includes(filters.authentication) : true)
    );
  })

  // Filtered Labs based on search criteria
  // const filteredLabs = labs.filter((lab) => {
  //   return (
  //     lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     lab.rating >= parseFloat(searchQuery)
  //   );
  // });

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Lab Listings</h1>

      <div style={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search by name, rating, etc."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchBar}
        />
        {/* Add filter options here */}
        <select name="rating" onChange={handleFilterChange} style={styles.filterSelect}>
          <option value="">Filter by Rating</option>
          <option value="4">4+</option>
          <option value="4.5">4.5+</option>
        </select>
        <select name="price" onChange={handleFilterChange} style={styles.filterSelect}>
          <option value="">Filter by Price</option>
          <option value="50">Up to $50</option>
          <option value="100">Up to $100</option>
        </select>
        {/* Add more filters as needed */}
      </div>

      <div style={styles.labContainer}>
        {/* Left Side: Lab List */}
        <div style={styles.labList}>
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              style={{
                ...styles.labCard,
                ...(selectedLab?.id === lab.id ? styles.selectedLabCard : {})
              }}
              onClick={() => setSelectedLab(lab)}
            >
              <img src={lab.image} alt={lab.name} style={styles.labImage} />
              <h2 style={styles.labName}>{lab.name}</h2>
              <p style={styles.labRating}>⭐ {lab.rating}/5</p>
            </div>
          ))}
        </div>

        

        {/* Right Side: Services Offered by Selected Lab */}
        <div style={styles.rightContainer}>
          <div>
            {selectedLab ? (
              <>

                <div style={styles.heading}>
                  <h2 style={styles.servicesHeader}>
                    Services Offered by {selectedLab.name}
                  </h2>
                </div>
                <div style={styles.servicesContainer}>
                  {selectedLab.services.map((service, index) => (
                    <div
                      key={index}
                      style={styles.serviceBox}
                      className="service-box"
                    >
                      <img src={service.image} alt={service.name} style={styles.serviceImage} />
                     <h3 style={styles.serviceTitle}>{service.name}</h3>
                      <p style={styles.serviceDescription}>{service.description}</p>
                      <p style={styles.servicePrice}>Price: <strong>{service.price}</strong></p>
                      <p style={styles.serviceTime}>Time: <strong>{service.time}</strong></p>
                    </div>
                  ))}
                </div>
              </>
           ) : (
              <div style={styles.emptyState}>
                <h2 style={styles.servicesHeader}>Select the lab details to show</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={styles.dummyContainer}>
        {/* Left Side: Lab List */}
        <div style={styles.labList1}>
          {filteredLabs1.map((lab1) => (
            <div
              key={lab1.id}
              style={{
                ...styles.labCard1,
                ...(selectedLab?.id === lab1.id ? styles.selectedLabCard1 : {})
              }}
              onClick={() => setSelectedLab(lab1)}
            >
              <img src={lab1.image} alt={lab1.name} style={styles.labImage} />
              <h2 style={styles.labName}>{lab1.name}</h2>
              <p style={styles.labRating}>⭐ {lab1.rating}/5</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginLeft:'285px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2em',
    color: '#ffffff',
  },
  labContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    overflow: 'hidden', // Prevents overflow
    justifyContent: 'space-between',
    height:'55vh',
  },
  labList: { // Reduced width to minimize the gap
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px', // Reduced gap between cards
    overflowY: 'auto',
    padding: '15px',
    justifyContent: 'center',
  },
  servicesContainer: {
    display: 'flex', // Changed to row to display horizontally
    gap: '15px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflowX: 'auto', // Allows horizontal scroll if needed
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labCard: {
    width:'90%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  selectedLabCard: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
    borderColor: '#007BFF',
  },
  labImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  labName: {
    fontSize: '1.8em',
    margin: '10px 0',
    color: '#fff',
  },
  labRating: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#fffff',
  },
  servicesHeader: {
    fontSize: '1.5em',
    marginBottom: '15px',
    color: '#fff',
    gridColumn: '1 / -1',

  },
  serviceBox: {
    width:'50%',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, background-color 0.3s',
    cursor: 'pointer',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  serviceTitle: {
    fontSize: '1.2em',
    margin: '10px 0',
    color: '#fff',
  },
  serviceDescription: {
    fontSize: '1em',
    marginBottom: '10px',
    color: '#fff',
  },
  servicePrice: {
    fontSize: '1em',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#fff',
  },
  serviceTime: {
    fontSize: '0.9em',
    color: '#fff',
  },



  filtersContainer: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '10px',
    marginBottom: '20px',
  },
  filter: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '10px',
  },
  filterInput: {
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  searchContainer: {
    width: '50%',
    display: 'right',
    justifyContent: 'flex-start',
    marginBottom: '20px',
  },
  filterSelect: {
    width: '15%', // Adjust width for the filter
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  searchBar: {
    width: '85%', // Adjust width to fit in one line
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  rightContainer: {
    width:'70%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Ensure it fits the screen height
    overflowY: 'auto', // Enable scroll if needed
  },
  
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Space between the search bar and filters
    marginBottom: '20px',
  },
  
  heading: {
    width: '100%',
    display: 'flex',
    justifyContent:'center',

  },
  emptyState: {
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  },
  dummyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    marginTop: '20px',
    
  },
  labList1: { 
    width: '100%',// Reduced width to minimize the gap
    display: 'flex',
    flexDirection: 'row',
    gap: '50px', // Reduced gap between cards
    overflowY: 'auto',
    padding: '15px',
  },
  labCard1: {
    width:'70%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  selectedLabCard1: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
    borderColor: '#007BFF',
  },
  
};


// Add the hover effect using CSS
const styleElement = document.createElement("style");
styleElement.innerHTML = `
  .service-box:hover {
    transform: scale(1.05);
    background-color: #4CCEAC;
  }
`;
document.head.appendChild(styleElement);

export default LabListingPage;
