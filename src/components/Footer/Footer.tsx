import { Box, Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const iconStyles = {
    marginLeft: "10px",
    color: "#012a2c",
    "&:hover": {
      color: "#105357",
    },
  };

  const footerStyles = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50px",
  };

  return (
    <Container maxWidth="xl" sx={{ ...footerStyles, mt: 8, mb: 2 }}>
      <Box sx={{ backgroundColor: "#012a2c", height: "5px" }} />
      <Box
        marginTop={"10px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography>Keighley Container Storage</Typography>
        <Box>
          <FacebookIcon sx={{ ...iconStyles }} />
          <TwitterIcon sx={{ ...iconStyles }} />
          <LinkedInIcon sx={{ ...iconStyles }} />
          <InstagramIcon sx={{ ...iconStyles }} />
        </Box>
      </Box>
      <Typography
        fontSize={"10px"}
        color="black"
        align="left"
        marginTop={"10px"}
      >
        Copyright © {new Date().getFullYear()} Keighley Container Storage. All
        rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
