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

const Service = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
      <Typography fontSize={"36px"}>Uncompromised Service</Typography>
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
          <Typography>
            At Keighley Container Storage, we are committed to offering
            uncompromised service to our customers. We understand that storing
            your belongings is a serious matter, and we go the extra mile to
            ensure that our facilities and services exceed your expectations.
            Here are some of the reasons why we offer uncompromised service:
          </Typography>

          <List
            sx={{
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <ListItem sx={{ display: "list-item" }}>
              Security: Our facilities are equipped with state-of-the-art
              security features, including video surveillance, alarms, and
              secure access control, to ensure the safety and security of your
              belongings.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Accessibility: Our self-storage containers are available 24/7, so
              you can access your belongings whenever you need them.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Cleanliness: We maintain our facilities to the highest standards
              of cleanliness and hygiene to ensure that your belongings remain
              in pristine condition.
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Customer service: Our friendly and knowledgeable staff are always
              available to assist you with any questions or concerns you may
              have.
            </ListItem>
          </List>
          <Typography>
            We believe that by offering uncompromised service, we can provide
            our customers with the peace of mind and confidence they need when
            storing their belongings with us.
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <img
            src={logo}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Service;
