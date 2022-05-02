import React, { useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Panel from '../Panel';
import { MapPreview } from '../MapDetail/MapPreview';
import { Transit } from './Transit';

const NeighborhoodAndTransit = ({ title, listing }) => {
  const transit = listing.nearby_transit;
  return (
    <Panel panelTitle={title}>
      <Grid container spacing={2} justify="center">
        <React.Fragment>
          <Grid item xs={12} sm={12}>
            <MapPreview listing={listing} />
          </Grid>
          <Transit transit={transit} />
        </React.Fragment>
      </Grid>
    </Panel>
  );
};

NeighborhoodAndTransit.propTypes = {
  title: PropTypes.string,
  listing: PropTypes.object.isRequired
};

export default NeighborhoodAndTransit;
