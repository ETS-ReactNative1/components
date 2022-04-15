import React, { useState } from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from './styles';
import { ListingMock } from './listing_mock';
import ContactAgents from '../ContactAgents';
import { Description } from '../Description';
import Divider from '../Divider';
import { History } from './../History';
import Amenities from './../Amenities';
import { PreviewAndCarousel } from '../PreviewAndCarousel';
import AboutThisProperty from '../AboutThisProperty';
import { MapDetail } from '../MapDetail';

const AppContainer = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isDialogOpened, setIsDialogOpened] = useState(true);
  const common = { isMobile };
  const details = ListingMock;

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item sm={12}>
          {/*  <PreviewAndCarousel listing={details} /> */}
          <MapDetail listing={details} />
        </Grid>
        <Grid item sm={12}></Grid>
      </Grid>
    </div>
  );
};

export default AppContainer;
