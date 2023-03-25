import { Box, Container } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <>
      <div>This is the Home Page</div>
      <Container maxWidth="xl">
        <Box sx={{ backgroundColor: "red", height: "60vh" }}></Box>
        <Box sx={{ backgroundColor: "blue", height: "60vh" }}></Box>
        <Box sx={{ backgroundColor: "green", height: "60vh" }}></Box>
      </Container>
    </>
  );
};

export default Home;
