const apiIsLoaded = (map, visibility = true) => {
  if (map) {
    const astorPlace = {
      lat: location.lat,
      lng: location.lon
    };

    const panorama = map.getStreetView(); // TODO fix type
    panorama.setPosition(astorPlace);
    panorama.setPov(
      /** @type {google.maps.StreetViewPov} */ {
        heading: 265,
        pitch: 0
      }
    );
    panorama.setVisible(visibility);
    map.setStreetView(panorama);
    setPanorama(panorama);
  }
};

export { apiIsLoaded };
