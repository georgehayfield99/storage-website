import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

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
            backgroundColor: "#f8f8f8",
          }}
        >
          <Typography variant="h1" align="center" gutterBottom>
            Oops!
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            We couldn't find the page you're looking for.
          </Typography>
          <Button variant="contained" sx={{ mt: 4 }}>
            Go back home
          </Button>
        </Box>
        <Footer isContentTaller={isContentTaller} />
      </Box>
    </div>
  );
};

export default Error;
