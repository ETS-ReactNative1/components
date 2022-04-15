import mapStyling from './mapStyling';

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

const colorByName = (name) => {
  switch (name) {
    case 'Babylon':
      return '#00985f';
    case 'City Terminal Zone':
      return '#4d5357';

    case 'Far Rockaway':
      return '#6e3219';

    case 'Hempstead':
      return '#ce8e02';

    case 'Long Beach':
      return '#ff631a';

    case 'Montauk':
      return '#006983';

    case 'Oyster Bay':
      return '#00af3f';

    case 'Port Jefferson':
      return '#0039a6';

    case 'Port Washington':
      return '#c60b30';

    case 'Ronkonkoma':
      return '#a626aa';

    case 'West Hempstead':
      return '#01a1de';

    case 'Belmont':
      return '#552989';

    case 'Harlem':
      return '#0039A6';

    case 'Wassaic':
      return '#0039A6';

    case 'Hudson':
      return '#009B3A';

    case 'New Haven':
      return '#EE0034';

    case 'New Canaan':
      return 'EE0034';

    case 'Danbury':
      return '#EE0034';

    case 'Waterbury':
      return '#EE0034';

    case 'Pascack Valley':
      return '#8E258D';

    case 'Port Jervis':
      return '#FF7900';
    case '1':
      return '#EE352E';
    case '2':
      return '#EE352E';
    case '3':
      return '#EE352E';
    case '4':
      return '#00933C';
    case '5':
      return '#00933C';
    case '6':
      return '#00933C';
    case '7':
      return '#B933AD';
    case 'A':
      return '#003986';
    case 'C':
      return '#003986';
    case 'E':
      return '#003986';
    case 'B':
      return '#FF6319';
    case 'F':
      return '#FF6319';
    case 'D':
      return '#FF6319';
    case 'M':
      return '#FF6319';
    case 'G':
      return '#6CBE45';
    case 'S':
      return '#808183';
    case 'J':
      return '#996633';
    case 'Z':
      return '#996633';
    case 'L':
      return '#A7A9AC';
    case 'N':
      return '#FCCC0A';
    case 'Q':
      return '#FCCC0A';
    case 'R':
      return '#FCCC0A';
    case 'W':
      return '#FCCC0A';
    default:
      return '#A7A9AC';
  }
};

export { mapOptionsCreator, colorByName };
