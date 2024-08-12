import React, { useState } from "react";
import "./AmbulanceList.css";

function AmbulanceList() {
  const ambulanceData = [
    {
      id: 1,
      name: "Patient Transfer",
      imageUrl: "https://medcab.in/assets/catagory_icon/patient-ambu.png",
      description: "This is a Patient Transfer ambulance.",
    },
    {
      id: 2,
      name: "Basic Life Support (BLS)",
      imageUrl: "https://medcab.in/assets/catagory_icon/basic-ambu.png",
      description: "This is a Basic Life Support (BLS) ambulance.",
    },
    {
      id: 3,
      name: "Advance Life Support (ALS)",
      imageUrl: "https://medcab.in/assets/catagory_icon/advance-ambu.png",
      description: "This is an Advance Life Support (ALS) ambulance.",
    },
    {
      id: 4,
      name: "Dead Body (Small)",
      imageUrl: "/dead-ambu.png",
      description: "This is a Dead Body (Small) ambulance.",
    },
    {
      id: 5,
      name: "Patient Transfer - AC",
      imageUrl: "https://medcab.in/assets/catagory_icon/patient-ambu.png",
      description: "This is a Patient Transfer - AC ambulance.",
    },
    {
      id: 6,
      name: "Basic Life Support (BLS) - AC",
      imageUrl: "https://medcab.in/assets/catagory_icon/basic-ambu.png",
      description: "This is a Basic Life Support (BLS) - AC ambulance.",
    },
    {
      id: 7,
      name: "Medical First Responder",
      imageUrl:
        "https://medcab.in/assets/catagory_icon/MedicalFirstresponder.png",
      description: "This is a Medical First Responder ambulance.",
    },
    {
      id: 8,
      name: "Dead Body (Medium)",
      imageUrl: "./dead-ambu.png",
      description: "This is a Dead Body (Medium) ambulance.",
    },
    {
      id: 9,
      name: "Dead Body (Big)",
      imageUrl: "/dead-ambu.png",
      description: "This is a Dead Body (Big) ambulance.",
    },
  ];

  const [selectedAmbulance, setSelectedAmbulance] = useState(null);

  const handleCardClick = (ambulance) => {
    setSelectedAmbulance(ambulance);
  };

  return (
    <div className="main-container">
      <div className="ambulance-list">
        {ambulanceData.map((ambulance) => (
          <div
            key={ambulance.id}
            className={`ambulance-card ${
              selectedAmbulance?.id === ambulance.id ? "selected" : ""
            }`}
            onClick={() => handleCardClick(ambulance)}
          >
            <div className="image-container">
              <img src={ambulance.imageUrl} alt={ambulance.name} />
            </div>
            <h3>{ambulance.name}</h3>
          </div>
        ))}
      </div>
      <div className="preview-panel">
        {selectedAmbulance ? (
          <>
            <img
              src={selectedAmbulance.imageUrl}
              alt={selectedAmbulance.name}
              className="preview-image"
            />
            <h2>{selectedAmbulance.name}</h2>
            <p>{selectedAmbulance.description}</p>
          </>
        ) : (
          <h2>Select an Ambulance</h2>
        )}
      </div>
    </div>
  );
}

export default AmbulanceList;
