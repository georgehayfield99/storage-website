import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Box,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

interface HeaderProps {
  links: { name: string; to: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <>
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
            {links.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button sx={{ color: "white" }}>{link.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ height: "1.5rem" }}></Box>
    </>
  );
};

export default Header;
