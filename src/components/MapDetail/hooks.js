import { useCallback } from 'react';

const useApiIsLoaded = ({ location }) => {
  const apiIsLoaded = useCallback(
    (map, visibility = true) => {
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
    },
    [location]
  );

  return { apiIsLoaded };
};

export { useApiIsLoaded };
