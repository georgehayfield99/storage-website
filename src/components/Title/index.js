import React from "react";
import classes from "./index.module.css";

const Title = (props) => {
  return <h1 className={classes.Container}>{props.children}</h1>;
};

export default Title;
