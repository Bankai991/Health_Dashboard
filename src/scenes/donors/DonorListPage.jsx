import React from "react";
import { Box, Typography, List, ListItem, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useParams } from "react-router-dom";

const DonorListPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { group } = useParams(); // Get the blood group from route parameters

  // Find the blood group data
  const bloodGroups = [
    { group: "A+", donors: ["Donor1", "Donor2"] },
    { group: "A-", donors: ["Donor3", "Donor4"] },
    { group: "B+", donors: ["Donor5", "Donor6"] },
    { group: "B-", donors: ["Donor7", "Donor8"] },
    { group: "O+", donors: ["Donor9", "Donor10"] },
    { group: "O-", donors: ["Donor11", "Donor12"] },
    { group: "AB+", donors: ["Donor13", "Donor14"] },
    { group: "AB-", donors: ["Donor15", "Donor16"] },
  ];

  const selectedGroup = bloodGroups.find((bg) => bg.group === group);

  return (
    <Box m="20px" marginLeft="285px">
      <Typography variant="h4" color={colors.greenAccent[300]}>
        Donors for Blood Group {group}
      </Typography>
      <List>
        {selectedGroup ? (
          selectedGroup.donors.map((donor, index) => (
            <ListItem key={index}>{donor}</ListItem>
          ))
        ) : (
          <Typography>No donors found for this blood group.</Typography>
        )}
      </List>
    </Box>
  );
};

export default DonorListPage;
