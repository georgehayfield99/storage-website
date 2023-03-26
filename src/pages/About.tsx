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
import React from "react";
import logo from "../container.jpeg";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";

const About = () => {
  return (
    <>
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
        <Box sx={{ backgroundColor: "#012a2c", height: "3px" }} />

        <Box
          marginTop={4}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography fontSize={"36px"}>Flexible Terms</Typography>
          <Box
            sx={{
              marginTop: "10px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ width: "50%", backgroundColor: "green" }}>
              <BusinessIcon />
              <Typography fontSize={"24px"}>Business</Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
              >
                <ListItem sx={{ display: "list-item" }}>
                  Business Document Storage
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>Stock Storage</ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Locked Storage
                </ListItem>
              </List>

              <HomeIcon />
              <Typography fontSize={"24px"}>Domestic</Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
              >
                <ListItem sx={{ display: "list-item" }}>Moving Home</ListItem>
                <ListItem sx={{ display: "list-item" }}>Decluttering</ListItem>
                <ListItem sx={{ display: "list-item" }}>Redecorating</ListItem>
              </List>

              <Typography>
                Keighley Container Storage offers flexible terms enabling you to
                rent a storage container with ease. Fees are paid monthly in
                advance with a deposit of just one month. We offer a simple
                license agreement with no complicated tie-ins. Don't hesitate to
                reach out if you have any questions!
              </Typography>

              <Typography>
                You must take out your own insurance for goods stored in our
                containers.
              </Typography>

              <Typography>
                Padlock and Lockbox are included in your monthly rental price!
              </Typography>
            </Box>
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

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography fontSize={"36px"}>Uncompromised Service</Typography>
          <Box
            sx={{
              marginTop: "10px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>
                At Keighley Container Storage, we are committed to offering
                uncompromised service to our customers. We understand that
                storing your belongings is a serious matter, and we go the extra
                mile to ensure that our facilities and services exceed your
                expectations. Here are some of the reasons why we offer
                uncompromised service:
              </Typography>

              <List
                sx={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
              >
                <ListItem sx={{ display: "list-item" }}>
                  Security: Our facilities are equipped with state-of-the-art
                  security features, including video surveillance, alarms, and
                  secure access control, to ensure the safety and security of
                  your belongings.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Accessibility: Our self-storage containers are available 24/7,
                  so you can access your belongings whenever you need them.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Cleanliness: We maintain our facilities to the highest
                  standards of cleanliness and hygiene to ensure that your
                  belongings remain in pristine condition.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Customer service: Our friendly and knowledgeable staff are
                  always available to assist you with any questions or concerns
                  you may have.
                </ListItem>
              </List>
              <Typography>
                We believe that by offering uncompromised service, we can
                provide our customers with the peace of mind and confidence they
                need when storing their belongings with us.
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <img
                src={logo}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
