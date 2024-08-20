import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Grid,
<<<<<<< HEAD
=======
  Rating,
  Avatar,
>>>>>>> sujith
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddIcon from "@mui/icons-material/Add";

<<<<<<< HEAD
=======

>>>>>>> sujith
const DriverDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

<<<<<<< HEAD
  // Initialize with 9 default driver details
=======
>>>>>>> sujith
  const defaultDrivers = Array.from({ length: 9 }, (_, index) => ({
    name: `Driver ${index + 1}`,
    phone: `123-456-789${index}`,
    email: `driver${index + 1}@example.com`,
    license: `LIC${index + 1}`,
<<<<<<< HEAD
  }));

  // State for form inputs
=======
    image: `${process.env.PUBLIC_URL}/assets/user.png`, // Use the image from the public directory
    rating: Math.floor(Math.random() * 5) + 1,
    reviews: Math.floor(Math.random() * 100) + 1,
  }));
  

>>>>>>> sujith
  const [driverName, setDriverName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
<<<<<<< HEAD

  // State for added drivers
  const [drivers, setDrivers] = useState(defaultDrivers);

  // State for modal visibility
  const [open, setOpen] = useState(false);

  // Handle form submission
  const handleAddDriver = () => {
    if (driverName && phoneNumber && email && licenseNumber) {
=======
  const [driverImage, setDriverImage] = useState("");

  const [drivers, setDrivers] = useState(defaultDrivers);
  const [open, setOpen] = useState(false);

  const handleAddDriver = () => {
    if (driverName && phoneNumber && email && licenseNumber && driverImage) {
>>>>>>> sujith
      const newDriver = {
        name: driverName,
        phone: phoneNumber,
        email: email,
        license: licenseNumber,
<<<<<<< HEAD
      };
      setDrivers([...drivers, newDriver]);

      // Clear form fields
=======
        image: driverImage,
        rating: Math.floor(Math.random() * 5) + 1,
        reviews: Math.floor(Math.random() * 100) + 1,
      };
      setDrivers([...drivers, newDriver]);

>>>>>>> sujith
      setDriverName("");
      setPhoneNumber("");
      setEmail("");
      setLicenseNumber("");
<<<<<<< HEAD

      // Close the modal
=======
      setDriverImage("");

>>>>>>> sujith
      setOpen(false);
    }
  };

<<<<<<< HEAD
  // Open the modal
=======
>>>>>>> sujith
  const handleClickOpen = () => {
    setOpen(true);
  };

<<<<<<< HEAD
  // Close the modal
=======
>>>>>>> sujith
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="DRIVER DETAILS" subtitle="Manage driver information" />

      <IconButton
        onClick={handleClickOpen}
        sx={{
          position: "fixed",
          top: 80,
          right: 20,
          backgroundColor: colors.blueAccent[700],
          color: "white",
<<<<<<< HEAD
=======
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
>>>>>>> sujith
          "&:hover": {
            backgroundColor: colors.blueAccent[800],
          },
        }}
      >
<<<<<<< HEAD
        <AddIcon />
      </IconButton>

      {/* Modal for adding driver */}
=======
        <AddIcon sx={{ fontSize: 28 }} />
      </IconButton>

>>>>>>> sujith
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
<<<<<<< HEAD
=======
              borderRadius: "8px",
>>>>>>> sujith
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
<<<<<<< HEAD
=======
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              value={driverImage}
              onChange={(e) => setDriverImage(e.target.value)}
            />
>>>>>>> sujith
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
<<<<<<< HEAD
          <Button onClick={handleAddDriver} color="secondary">
=======
          <Button onClick={handleAddDriver} color="primary">
>>>>>>> sujith
            Add Driver
          </Button>
        </DialogActions>
      </Dialog>

<<<<<<< HEAD
      {/* Display list of added drivers */}
=======
>>>>>>> sujith
      <Box
        mt="40px"
        p="20px"
        sx={{
          backgroundColor: colors.primary[400],
<<<<<<< HEAD
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={2}>
=======
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container spacing={3}>
>>>>>>> sujith
          {drivers.length > 0 ? (
            drivers.map((driver, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
<<<<<<< HEAD
                    backgroundColor: colors.primary[500],
                    borderRadius: "4px",
                    border: `1px solid ${colors.greenAccent[300]}`,
                  }}
                >
                  <CardContent>
                    <Typography variant="h1" color={colors.greenAccent[300]}>
                      Driver {index + 1}
                    </Typography>
                    <Typography variant="h4" color={colors.greenAccent[200]}>
                      Name: {driver.name}
                    </Typography>
                    <Typography variant="h4" color={colors.greenAccent[200]}>
                      Phone: {driver.phone}
                    </Typography>
                    <Typography variant="h4" color={colors.greenAccent[200]}>
                      Email: {driver.email}
                    </Typography>
                    <Typography variant="h4" color={colors.greenAccent[200]}>
                      License: {driver.license}
                    </Typography>
=======
                    background: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.primary[600]})`,
                    borderRadius: "16px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Avatar
                        src={driver.image}
                        alt={driver.name}
                        sx={{ width: 100, height: 100, mb: 2 }}
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          color: colors.greenAccent[300],
                          fontWeight: "bold",
                          fontFamily: "'Roboto Slab', serif",
                        }}
                      >
                        {driver.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: colors.greenAccent[200], mt: 1 }}
                      >
                        Phone: {driver.phone}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: colors.greenAccent[200] }}
                      >
                        Email: {driver.email}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: colors.greenAccent[200] }}
                      >
                        License: {driver.license}
                      </Typography>
                      <Box display="flex" alignItems="center" mt={2}>
                        <Rating
                          name={`rating-${index}`}
                          value={driver.rating}
                          readOnly
                          precision={0.5}
                          sx={{ mr: 1 }}
                        />
                        <Typography variant="body2" color={colors.greenAccent[200]}>
                          ({driver.reviews} reviews)
                        </Typography>
                      </Box>
                    </Box>
>>>>>>> sujith
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
