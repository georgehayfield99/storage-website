import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Error = () => {
  const [isContentTaller, setIsContentTaller] = useState(true);
  const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef) {
      const contentHeight = contentRef.clientHeight;
      const viewportHeight = window.innerHeight;
      setIsContentTaller(contentHeight > viewportHeight);
    }
  }, [contentRef]);

  return (
    <div ref={setContentRef}>
      <Box sx={{ position: "relative", minHeight: "93vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh",
          }}
        >
          <Typography fontSize={"64px"} align="center" gutterBottom>
            Well, this is awkward...
          </Typography>
          <Typography fontSize={"36px"} align="center" gutterBottom>
            We couldn't find the page you're looking for.
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{
                mt: 4,
                color: "#012a2c",
                borderColor: "#012a2c",
                "&:hover": {
                  borderColor: "#105357",
                  color: "#105357",
                },
              }}
            >
              Go back home
            </Button>
          </Link>
        </Box>
        <Footer isContentTaller={isContentTaller} />
      </Box>
    </div>
  );
};

export default Error;
