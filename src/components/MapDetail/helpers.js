import { mapStyling } from './map-styles';

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

export { mapOptionsCreator };
