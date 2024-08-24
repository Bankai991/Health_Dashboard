import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useState } from "react";
import { Google, Facebook, Twitter } from "@mui/icons-material"; // Import icons

const Lab_Booking = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [address2, setAddress2] = useState("");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px" marginLeft="285px" marginTop="85px">
      <Header title="Book for the Lab Test" subtitle="Fill the following details" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
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
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              /> */}
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
                  value={address2}
                  onChange={(e) => {
                    setAddress2(e.target.value);
                    setFieldValue("address2", e.target.value);
                  }}
                  name="address2"
                  label="test"
                >
                  <MenuItem value="Option 1">Blood Test</MenuItem>
                  <MenuItem value="Option 2">Urine Tests</MenuItem>
                  <MenuItem value="Option 3">X-rays</MenuItem>
                  <MenuItem value="Option 4">MRI</MenuItem>
                  <MenuItem value="Option 5">CT Scans</MenuItem>
                  <MenuItem value="Option 6">Ultasound</MenuItem>
                  <MenuItem value="Option 7">Cardiac MRI</MenuItem>
                  <MenuItem value="Option 8">Blood Glucose Test</MenuItem>
                  <MenuItem value="Option 9">Thyroid Panel</MenuItem>
                  <MenuItem value="Option 9">Liver Function Test</MenuItem>
                  <MenuItem value="Option 10">CBC Test</MenuItem>
                  <MenuItem value="Option 11">Kidney Function Test</MenuItem>
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
              <Typography variant="h3" color="textSecondary" mt="20px">
                OR
              </Typography>
              <Box display="flex" justifyContent="center" mt="10px">
                <IconButton>
                  <Google sx={{ fontSize: 40, color: "#DB4437" }} />
                </IconButton>
                <IconButton>
                  <Facebook sx={{ fontSize: 40, color: "#4267B2" }} />
                </IconButton>
                <IconButton>
                  <Twitter sx={{ fontSize: 40, color: "#1DA1F2" }} />
                </IconButton>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Lab_Booking;