import React from 'react';
import { ViewContainer } from './styled-components';
import GoogleMapReact from 'google-map-react';
import { useApiIsLoaded } from '../../hooks';
import { mapContainerStyle } from '../../map-styles';
import { MAP_KEY } from '../../const';
import { Marker } from '../../Marker';
import { mapOptionsCreator } from '../../helpers';

const MobileViewMap = ({ location, streetView = false }) => {
  const { apiIsLoaded } = useApiIsLoaded({ location });

  return (
    <ViewContainer>
      <GoogleMapReact
        style={{
          ...mapContainerStyle,
          ...{
            height: '100%'
          }
        }}
        options={mapOptionsCreator}
        onGoogleApiLoaded={({ map }) => apiIsLoaded(map, streetView)}
        bootstrapURLKeys={{ key: MAP_KEY }}
        defaultCenter={{
          lat: location.lat,
          lng: location.lon
        }}
        defaultZoom={11}
      >
        <Marker lat={location.lat} lng={location.lon} />
      </GoogleMapReact>
    </ViewContainer>
  );
};

export default MobileViewMap;
