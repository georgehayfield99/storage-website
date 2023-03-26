import React from "react";
import classes from "./index.module.css";

const Wrapper = (props) => {
  return <div className={classes.Container}>{props.children}</div>;
};

export default Wrapper;
