import React from 'react';
import Panel from './../Panel';
import { MapPreview } from './MapPreview';

const MapDetail = ({ listing }) => {
  return (
    <Panel panelTitle="Location">
      <MapPreview listing={listing} />
    </Panel>
  );
};

export { MapDetail };
