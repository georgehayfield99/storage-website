import * as React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Logo from "../../Logo.svg";

interface HeaderProps {
  links: { name: string; to: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const appBarRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    if (appBarRef.current) {
      setHeaderHeight(appBarRef.current.offsetHeight);
    }
  }, []);
  return (
    <>
      <AppBar
        ref={appBarRef}
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
          <img src={Logo} alt="Logo" />
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
