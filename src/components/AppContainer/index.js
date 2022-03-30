import React, { useState } from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from './styles';
import { ListingMock } from './listing_mock';
import ContactAgents from '../ContactAgents';

const AppContainer = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isDialogOpened, setIsDialogOpened] = useState(true);
  const common = { isMobile };
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <ContactAgents listing={ListingMock} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AppContainer;
