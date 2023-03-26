import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Location from "./pages/Location";
import Price from "./pages/Price";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
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
    <div className="App" ref={setContentRef}>
      <Router basename="/">
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
          <Header
            links={[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Location", to: "/location" },
              { name: "Price", to: "/price" },
              { name: "Contact Us", to: "/contact" },
            ]}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>

          {/* <Footer isContentTaller={isContentTaller} /> */}
        </Box>
      </Router>
    </div>
  );
}

export default App;
