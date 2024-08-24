import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid, Avatar, useTheme, Button, Modal, TextField, MenuItem } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Example data for blood groups
const initialBloodGroups = [
  { group: "A+", count: 200, donors: ["Donor1", "Donor2"] },
  { group: "A-", count: 150, donors: ["Donor3", "Donor4"] },
  { group: "B+", count: 250, donors: ["Donor5", "Donor6"] },
  { group: "B-", count: 100, donors: ["Donor7", "Donor8"] },
  { group: "O+", count: 300, donors: ["Donor9", "Donor10"] },
  { group: "O-", count: 120, donors: ["Donor11", "Donor12"] },
  { group: "AB+", count: 180, donors: ["Donor13", "Donor14"] },
  { group: "AB-", count: 90, donors: ["Donor15", "Donor16"] },
];

const BloodDonorDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const [bloodGroups, setBloodGroups] = useState(initialBloodGroups);
  const [modalOpen, setModalOpen] = useState(false);
  const [newDonor, setNewDonor] = useState({ name: "", group: "", location: "" });

  const totalRegisteredDonors = bloodGroups.reduce(
    (total, group) => total + group.count,
    0
  );

  // Prepare data for pie chart
  const pieData = bloodGroups.map((group) => ({
    name: group.group,
    value: group.count,
  }));

  // Define light colors for the pie chart segments
  const pieColors = [
    "#FFB6C1", "#FFCCCB", "#FFDAB9", "#E0FFFF", "#E6E6FA", "#F0E68C", "#F5DEB3", "#D3FFD3",
  ];

  // Handle modal open/close
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  // Handle form submission
  const handleSubmit = () => {
    if (newDonor.name && newDonor.group && newDonor.location) {
      setBloodGroups((prevGroups) =>
        prevGroups.map((group) =>
          group.group === newDonor.group
            ? { ...group, count: group.count + 1 }
            : group
        )
      );
      handleClose(); // Close modal after submission
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setNewDonor({ ...newDonor, [e.target.name]: e.target.value });
  };

  // Navigate to donor list page
  const handleViewDonors = (group) => {
    navigate(`/donors/${group}`);
  };

  return (
    <Box m="20px" marginLeft="285px">
      <Header
        title="BLOOD DONORS"
        subtitle="Overview of registered blood donors by blood type"
      />

      {/* New Registration Button */}
      <Button
        marginLeft="500px"
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ marginBottom: "20px", backgroundColor: "red" }} // Updated color styling
      >
        New Registration
      </Button>

      {/* Modal for New Registration */}
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
            Register New Donor
          </Typography>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={newDonor.name}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            fullWidth
            select
            label="Blood Group"
            name="group"
            value={newDonor.group}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
          >
            {bloodGroups.map((group, index) => (
              <MenuItem key={index} value={group.group}>
                {group.group}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={newDonor.location}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>

      {/* Large Box with Total and Pie Chart */}
      <Box
        mt="20px"
        p="15px"
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
          justifyContent: "space-between",
          gap: "20px", // Space between the boxes for better spacing
        }}
      >
        {/* Total Registered Donors */}
        <Box
          p="20px"
          sx={{
            flex: 1,
            backgroundColor: colors.primary[500],
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h5" color={colors.greenAccent[300]}>
            Total Registered Donors
          </Typography>
          <Typography variant="h3" color={colors.greenAccent[300]}>
            {totalRegisteredDonors}
          </Typography>
        </Box>
        

        {/* Pie Chart */}
        <Box
          p="20px"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: colors.primary[500],
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              fill={colors.primary[600]}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          {/* Blood Group Names Inside Pie Chart */}
          <Box
            mt="10px"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap="15px"
          >
            {pieData.map((entry, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ fontWeight: "bold", color: pieColors[index % pieColors.length] }}
              >
                {entry.name}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Blood Group Details */}
      <Box
        mt="30px" // Increased margin-top for spacing
        p="15px"
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container spacing={3}>
          {bloodGroups.map((group, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.primary[600]})`,
                  borderRadius: "16px",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{
                      bgcolor: colors.greenAccent[500],
                      width: 80,
                      height: 80,
                      mb: 2,
                      fontSize: "1.5rem",
                    }}
                  >
                    {group.group}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      color: colors.greenAccent[300],
                      fontWeight: "bold",
                      fontFamily: "'Roboto Slab', serif",
                    }}
                  >
                    {group.group} Blood Group
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: colors.greenAccent[200], mt: 1 }}
                  >
                    Registered: {group.count}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2 }}
                    onClick={() => handleViewDonors(group.group)}
                  >
                    View Donors
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BloodDonorDetails;
