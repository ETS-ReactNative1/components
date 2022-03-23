import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@material-ui/core";
import Heading from "../Heading";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
  },
  root: {
    boxShadow: "none",
  },
  accordionRoot: {
    padding: 0,
  },
}));

/** @type React.FC<{panelTitle: string}> */
const Panel = ({ children, panelTitle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const identifier = panelTitle.toLowerCase().replace(/\s/, "");

  if (matches) {
    return (
      <div className={classes.wrapper}>
        <Heading size="lg">{panelTitle}</Heading>
        {children}
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Accordion className={classes.root}>
        <AccordionSummary
          className={classes.accordionRoot}
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${identifier}-content`}
          id={`${identifier}-header`}
        >
          <Heading size="lg">{panelTitle}</Heading>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionRoot}>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.element,
  panelTitle: PropTypes.string,
};

export default Panel;
