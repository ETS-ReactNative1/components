import React, { useCallback, useEffect, useMemo } from 'react';
import GoogleMapReact from 'google-map-react';

import { Header } from './Header';
import { mapContainerStyle, mapStyling } from '../map-styles';
import { Marker } from '../Marker';
import { Container, Body, MapContainer } from './styled-components';
import { ViewModeToggle } from '../ViewModeToggle';
import PropTypes from 'prop-types';
import { MAP_KEY } from '../const';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { MobileView } from './MobileView';
import { useApiIsLoaded } from '../hooks';
import { mapOptionsCreator } from '../helpers';

const MapDetailDialog = ({ open, listing, onClose, mapRef, location }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const { apiIsLoaded } = useApiIsLoaded({ location });

  const maxWidth = useMemo(() => {
    if (isMobile) {
      return 'sm';
    }

    if (isMd) {
      return 'md';
    }

    return 'lg';
  }, [isMobile, isMd]);

  const handleClose = (_, reason) => {
    if (reason && reason === 'backdropClick') onClose();
  };

  const subtitle = useMemo(() => 'subtitle', [listing]);

  useEffect(() => {
    const header = document.querySelector('.header');
    if (!header) return;
    if (isMobile && open) {
      header.style.display = 'none';
    } else {
      header.style.display = 'block';
    }
    return () => {
      header.style.display = 'block';
    };
  }, [isMobile, open]);

  return (
    <Container open={open} onClose={handleClose} fullWidth={!isMobile} maxWidth={maxWidth}>
      <Header
        title={listing.address_with_unit_number}
        subtitle={subtitle}
        handleClose={onClose}
        isMobile={isMobile}
      />
      <Body>
        {!isMobile && (
          <ViewModeToggle
            handleOnMapViewClick={() => apiIsLoaded(mapRef.current.map_, false)}
            handleOnStreetViewClick={() => apiIsLoaded(mapRef.current.map_, true)}
          />
        )}

        <MapContainer>
          {isMobile ? (
            <MobileView location={location} />
          ) : (
            <GoogleMapReact
              ref={mapRef}
              style={{
                ...mapContainerStyle,
                ...(isMobile
                  ? {
                      height: 'calc(100vh - 72px)'
                    }
                  : {})
              }}
              options={mapOptionsCreator}
              onGoogleApiLoaded={({ map }) => apiIsLoaded(map, true)}
              bootstrapURLKeys={{ key: MAP_KEY }}
              defaultCenter={{
                lat: location.lat,
                lng: location.lon
              }}
              defaultZoom={11}
            >
              <Marker lat={location.lat} lng={location.lon} />
            </GoogleMapReact>
          )}
        </MapContainer>
      </Body>
    </Container>
  );
};

MapDetailDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  listing: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  mapRef: PropTypes.any,
  location: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export { MapDetailDialog };
