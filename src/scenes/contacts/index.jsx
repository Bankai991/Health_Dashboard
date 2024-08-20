import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataBookings } from "../../data/mockData"; // Ensure this import is correct
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Bookings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Booking ID", flex: 0.5 },
    { field: "customerName", headerName: "Customer Name", flex: 1 },
    { field: "service", headerName: "Service", flex: 1 },
    { field: "bookingDate", headerName: "Booking Date", type: "date", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "Track", headerName: "Track Location", flex: 1 },
  ];

  return (
    <Box m="20px" marginLeft="285px">
      <Header
        title="Booking Management"
        subtitle="List of All Bookings and Their Details"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataBookings}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Bookings;
