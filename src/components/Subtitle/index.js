import React from "react";
import classes from "./index.module.css";

const Subtitle = (props) => {
  return <h2 className={classes.Container}>{props.children}</h2>;
};

export default Subtitle;
