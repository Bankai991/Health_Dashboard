import { Box, Typography, useTheme, Grid, Card, CardContent, Button, Divider } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Pricing = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Data for the 9 different types of services
  const serviceData = [
    { service: "Basic Life Support", price: 12000 },
    { service: "Advanced Life Support", price: 20000 },
    { service: "Cardiac Ambulance", price: 35000 },
    { service: "Neo-Natal Care", price: 30000 },
    { service: "Patient Transport", price: 8000 },
    { service: "Event Standby Service", price: 25000 },
    { service: "Air Ambulance", price: 150000 },
    { service: "Long Distance Transfers", price: 40000 },
    { service: "Emergency Response", price: 35000 },
  ];

  // Data for the 3 different types of ambulances
  const ambulanceData = [
    { type: "Van Ambulance", price: 12000 },
    { type: "AC Ambulance", price: 20000 },
    { type: "ICU Ambulance", price: 35000 },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle selection
  const handleSelect = (item) => {
    setSelectedItems((prevSelectedItems) => {
      // Check if item is already selected
      if (prevSelectedItems.includes(item)) {
        // If selected, remove it
        return prevSelectedItems.filter((selected) => selected !== item);
      }
      // Otherwise, add it to the selection
      return [...prevSelectedItems, item];
    });
  };

  // Function to clear selections
  const handleClear = () => {
    setSelectedItems([]);
  };

  // Calculate total price
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box m="20px" marginLeft="285px">
      <Header title="PRICING" subtitle="Pricing for Services and Ambulance Types" />

      {/* Fixed box for total pricing in the top-right corner */}
      <Box
        sx={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: colors.primary[500],
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <Typography variant="h2" color={colors.grey[100]}>
          Total Price:
        </Typography>
        <Typography variant="h3" 
        color={colors.greenAccent[400]}
        sx={{ fontWeight: "bold" }}>
          ₹{totalPrice.toLocaleString()}
        </Typography>
      </Box>

      {/* Box for Service Pricing */}
      <Box mb={4} p={2} borderRadius="8px" sx={{ backgroundColor: colors.primary[400] }}>
        <Typography variant="h4" color={colors.grey[100]} gutterBottom>
          Services
        </Typography>
        <Grid container spacing={3}>
          {serviceData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: colors.primary[600],
                  color: colors.grey[100],
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  border: selectedItems.includes(item) ? `2px solid ${colors.greenAccent[500]}` : "none",
                }}
                onClick={() => handleSelect(item)}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {item.service}
                  </Typography>
                  <Typography variant="h4">
                    ₹{item.price.toLocaleString()} {/* Display price in rupees with commas */}
                  </Typography>
                  <Button
                    variant="contained"
                    color={selectedItems.includes(item) ? "secondary" : "secondary"}
                    sx={{ mt: 2, fontSize: "16px" }}
                  >
                    {selectedItems.includes(item) ? "Selected" : "Select"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Divider line */}
      <Divider sx={{ backgroundColor: colors.grey[700], mb: 4 }} />

      {/* Box for Ambulance Pricing */}
      <Box mb={4} p={2} borderRadius="8px" sx={{ backgroundColor: colors.primary[400] }}>
        <Typography variant="h4" color={colors.grey[100]} gutterBottom>
          Ambulance Types
        </Typography>
        <Grid container spacing={3}>
          {ambulanceData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: colors.primary[600],
                  color: colors.grey[100],
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  border: selectedItems.includes(item) ? `2px solid ${colors.greenAccent[500]}` : "none",
                }}
                onClick={() => handleSelect(item)}
              >
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {item.type}
                  </Typography>
                  <Typography variant="h4">
                    ₹{item.price.toLocaleString()} {/* Display price in rupees with commas */}
                  </Typography>
                  <Button
                    variant="contained"
                    color={selectedItems.includes(item) ? "secondary" : "secondary"}
                    sx={{ mt: 2, fontSize: "16px" }}
                  >
                    {selectedItems.includes(item) ? "Selected" : "Select"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Display selected items and total */}
      <Box mt={4} p={3} border={`1px solid ${colors.grey[600]}`} borderRadius="8px" sx={{ backgroundColor: colors.primary[400] }}>
        <Typography variant="h5" color={colors.grey[100]} mb={2}>
          Selected Items:
        </Typography>
        {selectedItems.length > 0 ? (
          <Box>
            <ul>
              {selectedItems.map((item, index) => (
                <li key={index}>
                  <Typography variant="body1" color={colors.grey[100]} sx={{ fontSize: "18px" }}>
                    {item.service || item.type} - ₹{item.price.toLocaleString()}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="h4" mt={2} color={colors.greenAccent[400]}>
              Total: ₹{totalPrice.toLocaleString()}
            </Typography>
          </Box>
        ) : (
          <Typography color={colors.grey[100]} sx={{ fontSize: "18px" }}>
            No items selected yet.
          </Typography>
        )}

        {/* Buttons */}
        <Box mt={3} display="flex" justifyContent="space-between">
          <Button variant="contained" color="secondary" onClick={handleClear} sx={{ fontSize: "16px" }}>
            Clear Selection
          </Button>
          <Button variant="contained" color="success" sx={{ fontSize: "16px" }}>
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
