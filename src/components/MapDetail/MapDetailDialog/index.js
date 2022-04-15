import React, { useCallback } from 'react';
import GoogleMapReact from 'google-map-react';

import { Header } from './Header';
import { transit } from '../MapPreview/transit';
import { mapContainerStyle, mapStyling, onlyMapContainerStyle } from '../map-styles';
import { Marker } from '../Marker';
import { Container, Body, MapContainer } from './styled-components';
import { ViewModeToggle } from '../ViewModeToggle';

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

const MapDetailDialog = ({ open, listing, onClose, mapRef, location }) => {
  const apiIsLoaded = useCallback((map, visibility = true) => {
    if (map) {
      const astorPlace = {
        lat: location.lat,
        lng: location.lon
      };
      const panorama = map.getStreetView();
      panorama.setPosition(astorPlace);
      panorama.setPov(
        /** @type {google.maps.StreetViewPov} */ {
          heading: 265,
          pitch: 0
        }
      );
      panorama.setVisible(visibility);
      map.setStreetView(panorama);
    }
  }, []);

  return (
    <Container open={open} fullWidth maxWidth={'lg'}>
      <Header
        title={listing.address_with_unit_number}
        subtitle={listing.place_name}
        handleClose={onClose}
      />
      <Body>
        <ViewModeToggle
          handleOnMapViewClick={() => apiIsLoaded(mapRef.current.map_, false)}
          handleOnStreetViewClick={() => apiIsLoaded(mapRef.current.map_, true)}
        />
        <MapContainer>
          <GoogleMapReact
            ref={mapRef}
            style={mapContainerStyle}
            options={mapOptionsCreator}
            onGoogleApiLoaded={({ map }) => apiIsLoaded(map, true)}
            bootstrapURLKeys={{ key: 'AIzaSyAql34T4IrMPnXk-19n-c-5uQ28DaUt8dM' }}
            defaultCenter={{
              lat: location.lat,
              lng: location.lon
            }}
            defaultZoom={11}
          >
            <Marker lat={location.lat} lng={location.lon} />
          </GoogleMapReact>
        </MapContainer>
      </Body>
    </Container>
  );
};

export { MapDetailDialog };
