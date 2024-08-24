import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar, Button, Modal, TextField } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart"; // Assuming you have a chart component

// Example organ donation data
const initialDonors = [
  { name: "John Doe", organ: "Kidney", date: "2024-05-15" },
  { name: "Jane Smith", organ: "Liver", date: "2024-07-01" },
  { name: "Alice Johnson", organ: "Heart", date: "2024-06-25" },
  { name: "Bob Williams", organ: "Cornea", date: "2024-08-10" },
];

const organStats = {
  totalDonors: 4,
  totalOrgansDonated: 4,
};

const OrganDonationDashboard = () => {
  const [donors] = useState(initialDonors);
  const [modalOpen, setModalOpen] = useState(false);
  const [contactDetails, setContactDetails] = useState({ name: "", email: "", message: "" });

  // Get unique organs from the donors list
  const organs = [...new Set(donors.map(donor => donor.organ))];

  // Handle modal open/close
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  // Handle form submission
  const handleSubmit = () => {
    if (contactDetails.name && contactDetails.email && contactDetails.message) {
      // Handle the form submission (e.g., send an email or save details)
      console.log("Contact details submitted:", contactDetails);
      setContactDetails({ name: "", email: "", message: "" });
      handleClose(); // Close modal after submission
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  return (
    <Box m="20px" marginLeft="285px">
      <Header title="ORGAN DONATION" subtitle="Overview of organ donors and donations" />

      {/* Statistics Section */}
      <Box
        mt="20px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#0D47A1", // Darker shade of primary color
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h5" color="white">
            Total Donors
          </Typography>
          <Typography variant="h3" color="white">
            {organStats.totalDonors}
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h5" color="white">
            Total Organs Donated
          </Typography>
          <Typography variant="h3" color="white">
            {organStats.totalOrgansDonated}
          </Typography>
        </Box>
      </Box>

      {/* Line Chart Section */}
      <Box mt="30px">
        <LineChart />
      </Box>

      {/* Organ List Section */}
      <Box mt="30px">
        <Typography variant="h4" gutterBottom>
          Donated Organs
        </Typography>
        <Grid container spacing={3}>
          {organs.map((organ, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#0D47A1", // Darker shade of primary color
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="white" sx={{ mb: 2 }}>
                    {organ}
                  </Typography>
                  <Typography variant="body1" color="white">
                    {donors.filter(donor => donor.organ === organ).length} Donors
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Donate Section */}
      <Box mt="30px" textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ backgroundColor: "#FF5722" }} // Accent color for button
        >
          Donate
        </Button>
      </Box>

      {/* Modal for Contact Form */}
      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Contact Us to Donate
          </Typography>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={contactDetails.name}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={contactDetails.email}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={contactDetails.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            sx={{ marginBottom: "20px" }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default OrganDonationDashboard;
