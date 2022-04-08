import React, { useState } from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from './styles';
import { ListingMock } from './listing_mock';
import ContactAgents from '../ContactAgents';
import { Description } from '../Description';
import Divider from '../Divider';
import { History } from './../History';
import Amenities from './../Amenities';

const AppContainer = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isDialogOpened, setIsDialogOpened] = useState(true);
  const common = { isMobile };
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item md={8}>
          <Divider />
          <Description
            title="About this property"
            text={`Wonderfully grand, bright, and spacious! The spectacular living room with a 13'`}
          />
          <Amenities data={ListingMock.sections.find((section) => section.type === 'amenities')} />
          <Divider />
          <ContactAgents listing={ListingMock} />
          <Divider />
          <History data={ListingMock.unit} />
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </div>
  );
};

export default AppContainer;
