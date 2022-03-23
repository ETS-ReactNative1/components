import React from "react";
import Types from "prop-types";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 700,
    margin: 0,
  },
  headingLg: {
    fontSize: 28,
    letterSpacing: -0.6,
    color: theme.palette.common.black,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      letterSpacing: -0.2,
    },
  },
  headingMd: {
    color: "#3B5568",
    fontSize: 20,
    letterSpacing: -0.2,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  headingSm: {
    fontSize: 13,
    letterSpacing: -0.2,
    color: theme.palette.common.black,
  },
}));

/** @typedef {'lg' | 'md' | 'sm' | 'xs'} Size */

/** @type React.FC<{size: Size}> */
const Heading = ({ size = "md", children }) => {
  const classes = useStyles();
  const headingMap = {
    lg: "h2",
    md: "h3",
    sm: "h4",
  };
  const classesMap = {
    lg: classes.headingLg,
    md: classes.headingMd,
    sm: classes.headingSm,
  };
  return (
    <Typography
      variant={headingMap[size]}
      className={clsx(classes.heading, classesMap[size])}
    >
      {children}
    </Typography>
  );
};
Heading.propTypes = {
  size: Types.string,
  children: Types.node,
};

export default Heading;
