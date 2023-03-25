import * as React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
              <Link
                key={link.to}
                to={link.to}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "#2C7A7B",
                      borderBottom: "2px solid #2C7A7B",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ height: "1rem" }}></Box>
    </>
  );
};

export default Header;
