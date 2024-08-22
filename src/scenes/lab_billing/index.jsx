import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";

const BookingSummary = () => {
  const location = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Extract data from location state
  const { formData, selectedItems } = location.state || {};

  if (!formData || !selectedItems) {
    return (
      <Box p={4}>
        <Typography variant="h4">No data available</Typography>
      </Box>
    );
  }

  // Calculate total price
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box m="20px" ml="285px">
      <Typography variant="h4" color={colors.grey[100]} gutterBottom>
        Booking Summary
      </Typography>
      <Box mb={2}>
        <Typography variant="h6" color={colors.grey[100]}>
          Name: {formData.firstName} {formData.lastName}
        </Typography>
        <Typography variant="h6" color={colors.grey[100]}>
          Contact: {formData.contact}
        </Typography>
        <Typography variant="h6" color={colors.grey[100]}>
          Address: {formData.address1}
        </Typography>
        <Typography variant="h6" color={colors.grey[100]}>
          Test Type: {formData.address2}
        </Typography>
      </Box>
      <Divider />
      <Typography variant="h4" color={colors.grey[100]} gutterBottom>
        Selected Items:
      </Typography>
      {selectedItems.length > 0 ? (
        <Box>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                <Typography variant="body1" color={colors.grey[100]}>
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
        <Typography color={colors.grey[100]}>
          No items selected yet.
        </Typography>
      )}
      <Box mt={3}>
        <Button variant="contained" color="secondary">
          Confirm Booking
        </Button>
      </Box>
    </Box>
  );
};

export default BookingSummary;
