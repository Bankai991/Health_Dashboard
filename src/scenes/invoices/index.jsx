import { useState } from "react";
import { Box, Typography, TextField, Button, useTheme, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent, Grid } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddIcon from "@mui/icons-material/Add";

const DriverDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Initialize with 9 default driver details
  const defaultDrivers = Array.from({ length: 9 }, (_, index) => ({
    name: `Driver ${index + 1}`,
    phone: `123-456-789${index}`,
    email: `driver${index + 1}@example.com`,      
    license: `LIC${index + 1}`,
  }));

  // State for form inputs
  const [driverName, setDriverName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  // State for added drivers
  const [drivers, setDrivers] = useState(defaultDrivers);

  // State for modal visibility
  const [open, setOpen] = useState(false);

  // Handle form submission
  const handleAddDriver = () => {
    if (driverName && phoneNumber && email && licenseNumber) {
      const newDriver = {
        name: driverName,
        phone: phoneNumber,
        email: email,
        license: licenseNumber,
      };
      setDrivers([...drivers, newDriver]);

      // Clear form fields
      setDriverName("");
      setPhoneNumber("");
      setEmail("");
      setLicenseNumber("");

      // Close the modal
      setOpen(false);
    }
  };

  // Open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m="20px">
      <Header  title="DRIVER DETAILS" subtitle="Manage driver information" />

      <IconButton
        onClick={handleClickOpen}
        sx={{
          position: "fixed",
          top: 80,
          right: 20,
          backgroundColor: colors.blueAccent[700],
          color: "white",
          "&:hover": {
            backgroundColor: colors.blueAccent[800],
          },
        }}
      >
        <AddIcon />
      </IconButton>

      {/* Modal for adding driver */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Driver</DialogTitle>
        <DialogContent>
          <Box
            p="20px"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              backgroundColor: colors.primary[400],
            }}
          >
            <TextField
              label="Driver Name"
              variant="outlined"
              fullWidth
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="License Number"
              variant="outlined"
              fullWidth
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddDriver} color="primary">
            Add Driver
          </Button>
        </DialogActions>
      </Dialog>

      {/* Display list of added drivers */}
      <Box
        mt="40px"
        p="20px"
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={2}>
          {drivers.length > 0 ? (
            drivers.map((driver, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: colors.primary[500],
                    borderRadius: "4px",
                    border: `1px solid ${colors.greenAccent[300]}`,
                  }}
                >
                  <CardContent>
                    <Typography variant="h1" color={colors.greenAccent[300]}>
                      Driver {index + 1}
                    </Typography>
                    <Typography variant="h4" color={colors.greenAccent[200]}>Name: {driver.name}</Typography>
                    <Typography variant="h4" color={colors.greenAccent[200]}>Phone: {driver.phone}</Typography>
                    <Typography variant="h4" color={colors.greenAccent[200]}>Email: {driver.email}</Typography>
                    <Typography variant="h4" color={colors.greenAccent[200]}>License: {driver.license}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography color={colors.greenAccent[200]}>
              No drivers added yet.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default DriverDetails;
