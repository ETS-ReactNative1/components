import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  subTitle: {
    fontSize: 13,
    fontFamily: 'GloberAdjusted',
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: 0.2,
    paddingBottom: 14,
    margin: 0,
    color: theme.palette.common.greyChateau
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    fontFamily: 'GloberAdjusted',
    lineHeight: '28px',
    letterSpacing: -0.2,
    paddingBottom: 4,
    margin: 0,
    marginTop: 15,
    textAlign: 'center'
  },
  wrapper: {
    marginTop: 30,
    marginBottom: 30,
    width: '100%'
  },
  columnItem: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 13,
    lineHeight: '18px',
    letterSpacing: 0.2,
    paddingTop: 6,
    marginRight: 10,
    color: theme.palette.common.darkGrey
  },
  columnItemBold: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 13,
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: 0.2,
    paddingTop: 6
  },
  rowItem: {
    borderBottom: `1px solid ${theme.palette.common.neutrals_N100}`,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 8,
    flexWrap: 'wrap',
    '&:hover': {
      backgroundColor: theme.palette.common.hover,
      cursor: 'pointer'
    },
    [theme.breakpoints.down('600')]: {
      display: 'block'
    }
  },
  gridPadding: {
    marginBottom: 30
  },
  imagePadding: {
    marginLeft: 8
  },
  columnWithImage: {
    border: `1px solid ${theme.palette.common.neutrals_N200}`,
    borderRadius: 8,
    '&:hover': {
      boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.12)',
      cursor: 'pointer'
    }
  },
  textWrapper: {
    padding: '27px 20px'
  },
  textBold: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '21px',
    letterSpacing: 0.2,
    paddingBottom: 4
  },
  textMiddle: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '21px',
    letterSpacing: 0.2,
    paddingBottom: 12
  },
  subTitleText: {
    fontSize: 13,
    fontFamily: 'GloberAdjusted',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: 0.2,
    margin: 0,
    color: theme.palette.common.greyChateau
  },
  mainImage: {
    width: '100%',
    maxHeight: 244,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 188
    }
  },
  roundWrapper: {
    width: '45%',
    flexWrap: 'wrap',
    display: 'flex',
    [theme.breakpoints.down(600)]: {
      width: '100%',
      marginLeft: 52
    }
  },
  marker: {
    width: 40,
    height: 40,
    cursor: 'pointer',
    position: 'relative',
    '&::after': {
      content: '""',
      transform: 'perspective(40px) rotateX(20deg) rotateZ(-45deg)',
      transformOrigin: '50% 50%',
      borderRadius: '50% 50% 50% 0',
      padding: '0 3px 3px 0',
      width: 40,
      height: 40,
      background: '#37D2BE',
      position: 'absolute',
      left: -22,
      top: -60,
      boxShadow: '-1px 1px 4px rgba(0, 0, 0, .5)'
    }
  },
  lineWrapper: {
    display: 'flex'
  },
  mapStreetWrapper: {
    position: 'absolute',
    bottom: 16,
    zIndex: 99,
    left: '40%',
    display: 'flex',
    justifyContent: 'center'
  },
  mapStreetWrapperTop: {
    position: 'absolute',
    top: 16,
    zIndex: 99,
    left: '40%',
    display: 'flex',
    justifyContent: 'center'
  },
  mapStreetButton: {
    padding: '12px 20px',
    backgroundColor: 'white',
    borderRadius: 100,
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.12)',
    cursor: 'pointer'
  },
  mapStreetButtonTop: {
    padding: '12px 20px',
    borderRadius: 100,
    backgroundColor: 'white',
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.12)',
    cursor: 'pointer'
  }
}));

export const mapStyling = [
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

export const mapContainerStyle = {
  position: 'relative',
  width: '100%',
  height: 646
};

export const onlyMapContainerStyle = {
  position: 'relative',
  width: '100%',
  height: 264
};
