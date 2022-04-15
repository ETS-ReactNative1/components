export default [
  {
    featureType: 'water',
    stylers: [
      {
        color: '#cccccc'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'landscape',
    stylers: [
      {
        color: '#f2f2f2'
      }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels',
    stylers: [
      {
        saturation: -100
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road',
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: 'road.highway',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444'
      }
    ]
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  }
];
