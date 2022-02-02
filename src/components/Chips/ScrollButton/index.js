import React from "react";
import useStyles from "./styles";

const ScrollButton = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} {...rest}>
      {children}
    </div>
  );
};

export default ScrollButton;
