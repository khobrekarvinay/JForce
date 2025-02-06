import React, { useState } from "react";
import {
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

// Custom theme with primary and secondary colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
});

const MaterialUIDemo = () => {
  // State for modal & switch
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        {/* Typography (Headings & Text) */}
        <Typography variant="h4" color="primary" gutterBottom>
          Material UI Components
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a demonstration of various Material UI components.
        </Typography>

        {/* Buttons */}
        <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>

        {/* Switch for Dark Mode */}
        <Box mt={2}>
          <Typography variant="body1">Dark Mode</Typography>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="primary"
          />
        </Box>

        {/* Form Elements: TextField & Select */}
        <Box mt={2}>
          <TextField label="Enter Name" variant="outlined" fullWidth />
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <InputLabel>Select Option</InputLabel>
            <Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Card Example */}
        <Box mt={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Card Title</Typography>
              <Typography variant="body2" color="textSecondary">
                This is an example of a Material UI card.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>

        {/* Table Example */}
        <Box mt={3}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2, 3].map((row) => (
                  <TableRow key={row}>
                    <TableCell>{row}</TableCell>
                    <TableCell>Person {row}</TableCell>
                    <TableCell>{20 + row}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Modal Example */}
        <Box mt={3}>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Open Modal
          </Button>
          <Modal open={open} onClose={() => setOpen(false)}> 
            {/* open = true or false. open is a prop in MOdal that controls whether the modal is visible or not.
           // Also backdrop prop is automatically applied which dims whole screen. */}
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
              }}
            >
              <Typography variant="h6">This is a Modal</Typography>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </Box>
          </Modal>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MaterialUIDemo;
