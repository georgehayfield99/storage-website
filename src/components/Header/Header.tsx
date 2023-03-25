import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Box,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#012a2c",
        padding: "0.5rem 5rem 0.5rem 5rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Keighley Container Storage</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button sx={{ color: "white" }}>Home</Button>
          <Button sx={{ color: "white" }}>About</Button>
          <Button sx={{ color: "white" }}>Location</Button>
          <Button sx={{ color: "white" }}>Price</Button>
          <Button sx={{ color: "white" }}>Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
