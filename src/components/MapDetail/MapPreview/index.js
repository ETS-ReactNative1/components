import React, { useState, useRef } from 'react';
import {
  Container,
  ViewModeButton,
  ViewModeButtonContainer,
  Center,
  Horizontal,
  Vertical
} from './styled-components';
import { MapDetailDialog } from '../MapDetailDialog';
import GoogleMapReact from 'google-map-react';
import { mapContainerStyle } from '../map-styles';
import { mapStyling } from '../map-styles';
import { Marker } from '../Marker';

function mapOptionsCreator(map) {
  return {
    styles: mapStyling,
    scrollwheel: false,
    zoomControlOptions: {
      position: map.ControlPosition.RIGHT_TOP,
      style: map.ZoomControlStyle.SMALL
    },
    draggable: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    panControl: false,
    fullscreenControl: false
  };
}

const MapPreview = ({ listing }) => {
  const location = listing.location;
  const [showDialog, setShowDialog] = useState(false);
  const mapRef = useRef();

  return (
    <Container>
      <ViewModeButtonContainer>
        <ViewModeButton onClick={() => setShowDialog(true)}>Street View</ViewModeButton>
      </ViewModeButtonContainer>
      <GoogleMapReact
        ref={mapRef}
        style={{ ...mapContainerStyle, height: 431 }}
        options={mapOptionsCreator}
        bootstrapURLKeys={{ key: 'AIzaSyAql34T4IrMPnXk-19n-c-5uQ28DaUt8dM' }}
        defaultCenter={{
          lat: location.lat,
          lng: location.lon
        }}
        defaultZoom={15}
      >
        <Marker lat={location.lat} lng={location.lon} />
      </GoogleMapReact>

      <MapDetailDialog
        open={showDialog}
        listing={listing}
        onClose={() => setShowDialog(false)}
        mapRef={mapRef}
        location={location}
      />
      <Center />
      <Horizontal />
      <Vertical />
    </Container>
  );
};

export { MapPreview };
