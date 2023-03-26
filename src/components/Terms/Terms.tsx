import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../container.jpeg";

import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";

const Terms = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
      <Typography fontSize={"36px"}>Flexible Terms</Typography>
      <Box
        sx={{
          marginTop: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <BusinessIcon />
          <Typography fontSize={"24px"}>Business</Typography>
          <List
            sx={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <ListItem sx={{ display: "list-item" }}>
              Business Document Storage
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>Stock Storage</ListItem>
            <ListItem sx={{ display: "list-item" }}>Locked Storage</ListItem>
          </List>

          <HomeIcon />
          <Typography fontSize={"24px"}>Domestic</Typography>
          <List
            sx={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <ListItem sx={{ display: "list-item" }}>Moving Home</ListItem>
            <ListItem sx={{ display: "list-item" }}>Decluttering</ListItem>
            <ListItem sx={{ display: "list-item" }}>Redecorating</ListItem>
          </List>

          <Typography>
            Keighley Container Storage offers flexible terms enabling you to
            rent a storage container with ease. Fees are paid monthly in advance
            with a deposit of just one month. We offer a simple license
            agreement with no complicated tie-ins. Don't hesitate to reach out
            if you have any questions!
          </Typography>

          <Typography>
            You must take out your own insurance for goods stored in our
            containers.
          </Typography>

          <Typography>
            Padlock and Lockbox are included in your monthly rental price!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Terms;
