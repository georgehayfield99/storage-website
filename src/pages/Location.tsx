import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

const Location = () => {
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
        <div>This is the Location Page</div>
        <Footer isContentTaller={isContentTaller} />
      </Box>
    </div>
  );
};

export default Location;
