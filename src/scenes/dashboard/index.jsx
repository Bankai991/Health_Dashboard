import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { tokens } from "../../theme";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import AirportShuttleSharpIcon from "@mui/icons-material/AirportShuttleSharp";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import AmbulanceList from "../../components/AmbulanceList";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });

  // Open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Auto-detect location using Geolocation API
  useEffect(() => {
    if (open && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData((prev) => ({
            ...prev,
            location: `Lat: ${latitude}, Long: ${longitude}`,
          }));
        },
        (error) => {
          setFormData((prev) => ({
            ...prev,
            location: "Location not available",
          }));
        }
      );
    }
  }, [open]);

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    handleClose();
  };

  return (
    <Box m="20px" marginLeft="285px">
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="AMBULANCE DASHBOARD"
          subtitle="Welcome to your dashboard"
        />
        <Box>
          <Button
            onClick={handleClickOpen}
            sx={{
              backgroundColor: colors.redAccent[600],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Emergency Booking
          </Button>
        </Box>
      </Box>

      {/* DIALOG FOR EMERGENCY BOOKING */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Emergency Booking</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            color="secondary"
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            color="secondary"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="standard"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="location"
            color="secondary"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            value={formData.location}
            onChange={handleInputChange}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="minmax(140px, auto)"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <StatBox
            title="12"
            subtitle="Ambulances Live"
            progress="0.4"
            increase="+40%"
            icon={
              <AirportShuttleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px", // Changed from right to left
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "red",
                animation: "blinking 1.5s infinite",
                "@keyframes blinking": {
                  "0%": { opacity: 1 },
                  "50%": { opacity: 0.5 },
                  "100%": { opacity: 1 },
                },
              }}
            />
            <Typography
              variant="body2"
              color="red"
              sx={{ ml: "5px", fontWeight: "bold" }}
            >
              LIVE
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="18"
            subtitle="Ambulances Available"
            progress="0.60"
            increase="+60%"
            icon={
              <AirportShuttleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="30"
            subtitle="Total Number of Ambulances"
            progress="1.00"
            increase="+100%"
            icon={
              <AirportShuttleSharpIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="18"
            subtitle="Drivers Available"
            progress="0.6"
            increase="+60%"
            icon={
              <AirlineSeatReclineNormalIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            justifyContent="center" // Center align the header
            alignItems="center"
            padding="30px" // Add padding for spacing
          >
            <Header title="AMBULANCE SERVICES" titleColor="rgb(76,206,172)" />
          </Box>
          <Box mb="0px">
            <AmbulanceList />
          </Box>
        </Box>

        {/* ROW 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          display="flex"
          flexDirection="column"
          alignItems="center" // Centers content horizontally
          justifyContent="center" // Centers content vertically
        >
          <Typography variant="h3" fontWeight="700">
            Pink Ambulance
          </Typography>
          <Box
            component="img"
            src="/pink-ambu-1.png"
            alt="Pink Ambulance"
            sx={{
              width: "180px",
              height: "auto",
              mt: "20px",
            }}
          />
          <Typography
            variant="h4"
            color={colors.grey[100]}
            sx={{ mt: "15px", textAlign: "center" }}
          >
            Women driver for emergency women patient
          </Typography>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          display="flex"
          flexDirection="column"
          alignItems="center" // Centers content horizontally
          justifyContent="center" // Centers content vertically
        >
          <Typography variant="h3" fontWeight="700">
            Bulk Ambulance
          </Typography>
          <Box
            component="img"
            src="/bulk-ambu.png"
            alt="Bulk Ambulance"
            sx={{
              width: "180px",
              height: "auto",
              mt: "20px",
            }}
          />
          <Typography
            variant="h4"
            color={colors.grey[100]}
            sx={{ mt: "15px", textAlign: "center" }}
          >
            For Emergency Multiple Ambulance Needs
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          display="flex"
          flexDirection="column"
          alignItems="center" // Centers content horizontally
          justifyContent="center" // Centers content vertically
        >
          <Typography variant="h3" fontWeight="700">
            Rent Ambulance
          </Typography>
          <Box
            component="img"
            src="/rent-ambu.png"
            alt="Rent Ambulance"
            sx={{
              width: "180px",
              height: "auto",
              mt: "20px",
            }}
          />
          <Typography
            variant="h4"
            color={colors.grey[100]}
            sx={{ mt: "15px", textAlign: "center" }}
          >
            For Events, travel, transfer & more
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
