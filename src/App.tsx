import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
          <Header
            links={[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Contact Us", to: "/contact" },
            ]}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
        </Box>{" "}
      </Router>
    </div>
  );
}

export default App;
