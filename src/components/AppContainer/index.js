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
import NeighborhoodAndTransit from '../NeighborhoodAndTransit';
import { ShareListing } from '../ShareListing';
import MoreInfo from '../MoreInfo';
import BuildingMaManagement from '../BuildingManagement';
import { BuildingMock } from './building_mock';
import Financials from '../Financials';

const AppContainer = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const building = BuildingMock;

  const [isDialogOpened, setIsDialogOpened] = useState(true);
  const common = { isMobile };
  const details = ListingMock;

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item sm={8}>
          {/* <NeighborhoodAndTransit
            listing={details}
            address={details.address_with_unit_hashed}
            addressSecond={`${details.place_name} • ${details.property_type}`}
            title="Location"
            transit={details.nearby_transit}
            location={details.location}
          />
 */}
          <Divider mt={3} mb={3} />
          <Financials data={building} />
          {/*   <BuildingMaManagement building={building} /> */}
          {/* <MoreInfo
            title="Details"
            amenities={details.sections.find((section) => section.type === 'more_info')}
          /> */}
          {/* <PreviewAndCarousel listing={details} />
          <MapDetail listing={details} /> 
          <Divider mt={3} mb={3} />
          
          <Divider mt={3} mb={3} />
          {/*   <ContactAgents listing={details} /> */}
          {/*  <History data={details} /> */}
          {/* <ShareListing /> */}
        </Grid>
        <Grid item sm={12}></Grid>
      </Grid>
    </div>
  );
};

export default AppContainer;
