import React from "react";
import classes from "./index.module.css";

import { useState } from "react";
import { HeroSlider, Slide, Overlay } from "hero-slider";
import { Box, Typography } from "@mui/material";

const titles = [
  "Keighley Container Storage",
  "Second Title",
  "Third Title",
  "Fourth Title",
];

const Title = (props, title) => {
  return <h1 className={classes.Container}>{props.children}{title}</h1>;
};

export default Title;
