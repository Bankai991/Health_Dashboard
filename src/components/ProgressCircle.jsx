import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40", label }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        position: "relative", // Ensure the label can be positioned inside the circle
        display: "inline-flex",
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: "75px",
        height: "75px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute", // Overlay the label inside the circle
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the label
        }}
      >
        <Typography
          variant="h4"
          component="div"
          color="textSecondary"
          fontWeight="bold"
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressCircle;
