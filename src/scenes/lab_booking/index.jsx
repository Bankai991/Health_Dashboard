import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

// Booking Form
const BookingForm = ({ onFormSubmit, formData }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [testType, setTestType] = useState("");

  return (
    <Box m="20px" marginLeft="285px">
      <Header title="Book for the Lab Test" subtitle="Fill the following details" />

      <Formik
        onSubmit={onFormSubmit}
        initialValues={formData}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <FormControl
                fullWidth
                variant="filled"
                sx={{ gridColumn: "span 4" }}
              >
                <InputLabel>Type of Test</InputLabel>
                <Select
                  value={testType}
                  onChange={(e) => {
                    setTestType(e.target.value);
                    setFieldValue("address2", e.target.value);
                  }}
                  name="address2"
                  label="Test"
                >
                  <MenuItem value="Blood Test">Blood Test</MenuItem>
                  <MenuItem value="X-rays">X-rays</MenuItem>
                  {/* Add other options here */}
                </Select>
              </FormControl>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="20px"
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "300px", height: "62px", fontSize: "18px" }}
              >
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// Billing Component
const Billing = ({ selectedItems, handleSelect, handleClear, formData }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  // Calculate total price
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const serviceData = [
    { service: "Blood Test", price: 200 },
    { service: "Urine Tests", price: 200 },
    { service: "X-rays", price: 350 },
    { service: "MRI", price: 3000 },
    { service: "CT Scans", price: 8000 },
    { service: "Ultrasound", price: 2500 },
    { service: "Cardiac MRI", price: 1500 },
    { service: "Blood Glucose Test", price: 400 },
    { service: "Thyroid Panel", price: 350 },
    { service: "Liver Function Test", price: 450 },
    { service: "CBC Test", price: 400 },
    { service: "Kidney Function Test", price: 550 },
    // Add other services here
  ];

  return (
    <Box mb={4} p={2} minHeight='100vh' borderRadius="8px" sx={{ backgroundColor: colors.primary[400] }}>
      <Typography variant="h1" color={colors.grey[100]} gutterBottom>
        Booking Details
      </Typography>
      <Box mb={2}>
        <Typography variant="h3" color={colors.grey[100]}>
          Name: {formData.firstName} {formData.lastName}
        </Typography>
        <Typography variant="h3" color={colors.grey[100]}>
          Contact: {formData.contact}
        </Typography>
        <Typography variant="h3" color={colors.grey[100]}>
          Address: {formData.address1}
        </Typography>
        <Typography variant="h3" color={colors.grey[100]}>
          Test Type: {formData.address2}
        </Typography>
      </Box>
      <Divider />
      <Typography variant="h4" color={colors.grey[100]} gutterBottom marginTop={'50px'}>
        Selected Items:
      </Typography>
      {selectedItems.length > 0 ? (
        <Box>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                <Typography variant="body1" color={colors.grey[100]} sx={{ fontSize: "18px" }}>
                  {item.service} - ₹{item.price.toLocaleString()}
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
  );
};

// Combined Component
const BookingAndBilling = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    address1: "",
    address2: "",
  });

  // Function to handle selection
  const handleSelect = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((selected) => selected !== item);
      }
      return [...prevSelectedItems, item];
    });
  };

  // Function to clear selections
  const handleClear = () => {
    setSelectedItems([]);
  };

  const handleFormSubmit = (values) => {
    setFormData(values);
    console.log(values);
    // Here you can handle form submission logic such as saving to a database
  };
  const handleBookNow = () => {
    navigate('/summary', { state: { formData, selectedItems } });
  };

  const serviceData = [
    { service: "Blood Test", price: 200 },
    { service: "Urine Tests", price: 200 },
    { service: "X-rays", price: 350 },
    { service: "MRI", price: 3000 },
    { service: "CT Scans", price: 8000 },
    { service: "Ultrasound", price: 2500 },
    { service: "Cardiac MRI", price: 1500 },
    { service: "Blood Glucose Test", price: 400 },
    { service: "Thyroid Panel", price: 350 },
    { service: "Liver Function Test", price: 450 },
    { service: "CBC Test", price: 400 },
    { service: "Kidney Function Test", price: 550 },
    // Add other services here
  ];

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Box flex={1}>
        <BookingForm onFormSubmit={handleFormSubmit} formData={formData}/>
        <Box mt={4} marginLeft='285px' >
          <Header title="Available Services" subtitle="Choose from the services below" />
          <Grid container spacing={2}>
            {serviceData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: colors.primary[400],
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
      </Box>
      <Box flex={1} ml={2}>
        <Billing
          selectedItems={selectedItems}
          handleSelect={handleSelect}
          handleClear={handleClear}
          formData={formData}
        />
      </Box>
    </Box>
  );
};

// Validation Schema
const phoneRegExp =
  /^((\+?[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});



export default BookingAndBilling;
