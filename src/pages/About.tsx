import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../container.jpeg";
import Service from "../components/Service/Service";
import Terms from "../components/Terms/Terms";
import Footer from "../components/Footer/Footer";

const About = () => {
  const [isContentTaller, setIsContentTaller] = useState(true);
  const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);
  const [minHeight, setMinHeight] = useState(window.innerHeight - 80);

  useEffect(() => {
    if (contentRef) {
      const contentHeight = contentRef.clientHeight;
      const viewportHeight = window.innerHeight;
      setIsContentTaller(contentHeight > viewportHeight);
    }
    const handleResize = () => {
      setMinHeight(window.innerHeight - 80);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  return (
    <div ref={setContentRef}>
      <Box sx={{ height: "30vh", backgroundColor: "red" }}>
        <img
          src={logo}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>

      <Container maxWidth="xl">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          marginBottom={"10px"}
        >
          <Typography fontSize={"36px"}>About Us</Typography>
          <Typography fontSize={"28px"}>
            Self Storage Containers in Keighley
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Box sx={{ width: "50%" }}>
            <Typography align="left">
              Keighley Container Storage offers both businesses and individuals
              a secure and cost effective solution for storage in Keighley. We
              are conveniently situated on Woodhouse Road which is easily
              accessible from South Street.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ width: "50%", alignSelf: "flex-end" }}>
            <Typography align="right">
              We're a down to earth and local business, and are on hand to
              answer questions and provide support around the clock if needed by
              our clients.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Box sx={{ width: "50%" }}>
            <Typography align="left">
              We're a down to earth and local business, and are on hand to
              answer questions and provide support around the clock if needed by
              our clients.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography align="right">
              Conveniently located Container Storage Leeds for the following
              areas for domestic, business and student self-storage: Leeds,
              Keighley, Silsden, Steeton, Cross Hills, Cowling, Oakworth,
              Oxenhope, Cullingworth, Denholme, Addingham, Burley in Wharfedale,
              Sutton-in-Craven, Cononley, Kildwick, Farnhill, Bradley,
              Riddlesden, Eastburn, Stanbury, Haworth, Harden, Cragg Vale,
              Mytholmroyd, Luddendenfoot, Sowerby Bridge, Ripponden, Marsden,
              Meltham, Holmfirth, Clayton, and Thornton.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#012a2c",
            height: "3px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        />

        <Terms />

        <Box
          sx={{
            backgroundColor: "#012a2c",
            height: "3px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        />

        <Service />
        <Footer isContentTaller={isContentTaller} />
      </Container>
    </div>
  );
};

export default About;
