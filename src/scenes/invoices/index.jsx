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
  Rating,
  Avatar,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddIcon from "@mui/icons-material/Add";

const DriverDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const defaultDrivers = Array.from({ length: 9 }, (_, index) => ({
    name: `Driver ${index + 1}`,
    phone: `123-456-789${index}`,
    email: `driver${index + 1}@example.com`,
    license: `LIC${index + 1}`,
    image: `${process.env.PUBLIC_URL}/assets/user.png`, // Use the image from the public directory
    rating: Math.floor(Math.random() * 5) + 1,
    reviews: Math.floor(Math.random() * 100) + 1,
  }));

  const [driverName, setDriverName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [driverImage, setDriverImage] = useState("");

  const [drivers, setDrivers] = useState(defaultDrivers);
  const [open, setOpen] = useState(false);

  const handleAddDriver = () => {
    if (driverName && phoneNumber && email && licenseNumber && driverImage) {
      const newDriver = {
        name: driverName,
        phone: phoneNumber,
        email: email,
        license: licenseNumber,
        image: driverImage,
        rating: Math.floor(Math.random() * 5) + 1,
        reviews: Math.floor(Math.random() * 100) + 1,
      };
      setDrivers([...drivers, newDriver]);

      setDriverName("");
      setPhoneNumber("");
      setEmail("");
      setLicenseNumber("");
      setDriverImage("");

      setOpen(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

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
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          "&:hover": {
            backgroundColor: colors.blueAccent[800],
          },
        }}
      >
        <AddIcon sx={{ fontSize: 28 }} />
      </IconButton>

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
              borderRadius: "8px",
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
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              value={driverImage}
              onChange={(e) => setDriverImage(e.target.value)}
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

      <Box
        mt="40px"
        p="20px"
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container spacing={3}>
          {drivers.length > 0 ? (
            drivers.map((driver, index) => (
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
                        <Typography
                          variant="body2"
                          color={colors.greenAccent[200]}
                        >
                          ({driver.reviews} reviews)
                        </Typography>
                      </Box>
                    </Box>
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
