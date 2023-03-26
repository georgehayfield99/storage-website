import { Box, Container, Typography } from "@mui/material";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import React from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import container from "../container.jpeg";
import container1 from "../container 1.jpeg";
import container2 from "../container2.webp";
import container3 from "../container3.jpeg";
import { AddBox } from "@mui/icons-material";
import Service from "../components/Service/Service";

const Home = () => {
  return (
    <>
      <HeroSlider
        height={"93vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Overlay></Overlay>

        <Slide
          shouldRenderMask
          label="Shipping Container - Keighley"
          background={{
            backgroundImageSrc: container,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginLeft: "40vw",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography fontSize={"48px"} color="white">
                Keighley Container Storage
              </Typography>
            </Box>
          </Box>
        </Slide>

        <Slide
          shouldRenderMask
          label="Shipping Container - Keighley"
          background={{
            backgroundImageSrc: container1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginLeft: "40vw",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography fontSize={"48px"} color="white">
                Keighley Container Storage
              </Typography>
            </Box>
          </Box>
        </Slide>

        <Slide
          shouldRenderMask
          label="Shipping Container - Keighley"
          background={{
            backgroundImageSrc: container2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginLeft: "40vw",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography fontSize={"48px"} color="white">
                Keighley Container Storage
              </Typography>
            </Box>
          </Box>
        </Slide>

        <Slide
          shouldRenderMask
          label="Shipping Container - Keighley"
          background={{
            backgroundImageSrc: container3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              marginLeft: "40vw",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography fontSize={"48px"} color="white">
                Keighley Container Storage
              </Typography>
            </Box>
          </Box>
        </Slide>

        <MenuNav />
      </HeroSlider>
      <div>This is the Home Page</div>
      <Container maxWidth="xl">
        <Service />
        <Box sx={{ backgroundColor: "red", height: "60vh" }}></Box>
        <Box sx={{ backgroundColor: "blue", height: "60vh" }}></Box>
        <Box sx={{ backgroundColor: "green", height: "60vh" }}></Box>
      </Container>
    </>
  );
};

export default Home;
