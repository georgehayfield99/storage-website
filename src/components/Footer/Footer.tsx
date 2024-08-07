import { Box, Container, Divider, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = ({ isContentTaller }: { isContentTaller: boolean }) => {
  const iconStyles = {
    marginLeft: "10px",
    color: "#012a2c",
    "&:hover": {
      color: "#105357",
    },
  };

  const footerStyles = {
    // change to relative if you want it to not be on content?
    position: isContentTaller ? "relative" : "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "200px",
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          ...footerStyles,
          mb: 2,
        }}
        disableGutters={true}
      >
        <Divider />
        <Typography
          fontSize={"26px"}
          sx={{ marginTop: "20px", color: "#383f40" }}
        >
          Looking for storage in Keighley?
        </Typography>
        <Typography
          fontSize={"22px"}
          sx={{ marginTop: "20px", marginBottom: "20px", color: "#383f40" }}
        >
          Speak to us today for advice on your storage needs on 07557143458.
        </Typography>

        <Box sx={{ backgroundColor: "#012a2c", height: "5px" }} />
        <Box
          marginTop={"10px"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} flexDirection={"row"}>
            <Typography>Hayfield Group</Typography>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              <Typography color={"black"}>About Us</Typography>
            </Link>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              <Typography color={"black"}>Contact Us</Typography>
            </Link>
          </Box>

          <Box>
            <Link to="https://www.facebook.com">
              <FacebookIcon sx={{ ...iconStyles }} />
            </Link>
            <Link to="https://www.x.com">
              <XIcon sx={{ ...iconStyles }} />
            </Link>
            <Link to="https://www.linkedin.com">
              <LinkedInIcon sx={{ ...iconStyles }} />
            </Link>
            <Link to="https://www.instagram.com">
              <InstagramIcon sx={{ ...iconStyles }} />
            </Link>
          </Box>
        </Box>
        <Typography
          fontSize={"10px"}
          color="#383f40"
          align="left"
          marginTop={"10px"}
        >
          Copyright © {new Date().getFullYear()} Hayfield Group Ltd. All rights
          reserved.
        </Typography>
      </Container>
    </>
  );
};

export default Footer;
