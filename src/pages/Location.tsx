import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

const Location = () => {
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
      <Box sx={{ position: "relative", minHeight: `${minHeight}px` }}>
        <div>This is the Location Page</div>
        <Footer isContentTaller={isContentTaller} />
      </Box>
    </div>
  );
};

export default Location;
