import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import logo from "../container.jpeg";

const About = () => {
  return (
    <>
      <Box sx={{ height: "30vh", backgroundColor: "red" }}>
        <img
          src={logo}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>

      <Container maxWidth="xl">
        <Typography>About Us</Typography>
        <Typography>Self Storage Containers in Keighley</Typography>
        <Box sx={{ width: "50%" }}>
          <Typography>
            LS10 STORAGE CONTAINERS in Leeds offers both businesses and
            individuals a secure and cost effective solution for storage in
            Leeds. We are conveniently situated in Hunslet which is easily
            accessible to Leeds City Centre and Motorway networks. LS10 Storage
            has a loading ramp on site which enables a smooth and easy process
            for container loading. We can allow two 40ft containers on site at
            the same time. Conveniently located Container Storage Leeds for the
            following areas for domestic, business and student self-storage:
            Leeds, Alwoodley, Armley, Batley, Beeston, Belle Isle,Holbeck,
            Bramley and Stanningley, Chapel Allerton, Dewsbury,East Ardsley,
            Farnley, Gildersome, Headingley, Hunslet, Hyde Park,Lofthouse,
            Meanwood,Middleton, Middleton Park, Moortown, Morley, Pudsey,
            Rothwell, Roundhay, Shadwell, Tingley & Wortley.
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "red", height: "30vh" }}></Box>
      </Container>
    </>
  );
};

export default About;
