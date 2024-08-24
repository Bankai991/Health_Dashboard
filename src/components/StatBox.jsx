import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          {React.cloneElement(icon, {
            sx: { fontSize: "52px", color: colors.greenAccent[600] }, // Double the icon size (26px * 2 = 52px)
          })}
          <Typography
            variant="h3" // Changed from h4 to h3 to increase size
            fontWeight="bold"
            sx={{ color: colors.grey[100], ml: "10px" }} // Added margin for spacing
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} size="50" />{" "}
          {/* Increased the size */}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          {" "}
          {/* Changed from h5 to h4 to increase size */}
          {subtitle}
        </Typography>
        <Typography
          variant="h4" // Changed from h5 to h4 to increase size
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
