import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import ContactAgents from "../ContactAgents";
import useStyles from "./styles";

const AppContainer = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const common = { isMobile };
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <ContactAgents />
        </Grid>
      </Grid>
    </div>
  );
};

export default AppContainer;
