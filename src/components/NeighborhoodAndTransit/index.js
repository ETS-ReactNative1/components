import React, { useRef, useMemo, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Panel from '../Panel';
import styled from 'styled-components';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GoogleMapReact from 'google-map-react';
import mapStyling from './mapStyling';

const styles = (theme) => ({
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'gray'
  }
});

const useStyles = makeStyles((theme) => ({
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
      background: theme.palette.primary.main,
      position: 'absolute',
      left: 0,
      top: -20,
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

const Round = styled.div(({ color }) => ({
  width: 23,
  height: 23,
  borderRadius: '50%',
  backgroundColor: color,
  color: 'white',
  margin: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 13
}));

const RectangleLabel = styled.div(({ color }) => ({
  borderRadius: 3,
  backgroundColor: color,
  color: 'white',
  margin: 4,
  padding: 8,
  fontFamily: 'GloberAdjusted',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 0.3
}));

const mapContainerStyle = {
  position: 'relative',
  width: '100%',
  height: 547
};

const onlyMapContainerStyle = {
  position: 'relative',
  width: '100%',
  height: 264
};

const transit = {
  mta: [
    {
      distance: 1.25,
      station_name: 'Delancey Street',
      routes: ['J', 'Z', 'F', 'M']
    },
    {
      distance: 1.45,
      station_name: 'Chambers Street',
      routes: ['1']
    }
  ],
  jitney: [
    {
      distance: 1.25,
      station_name: 'Southampton',
      routes: ['Montauk']
    }
  ],
  lirr: [
    {
      distance: 1.25,
      station_name: 'Port Jefferson',
      routes: ['Far Rockaway']
    },
    {
      distance: 1.65,
      station_name: 'Penn Station',
      routes: [
        'Babylon',
        'City Terminal Zone',
        'Far Rockaway',
        'Hempstead',
        'Long Beach',
        'Montauk',
        'Oyster Bay',
        'Port Jefferson',
        'Port Washington',
        'Ronkonkoma',
        'West Hempstead'
      ]
    }
  ]
};

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, address, addressSecond, classesStyle, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other} style={{ padding: 0 }}>
      <p className={classesStyle.title}>{address}</p>
      <p className={classesStyle.subTitle} style={{ textAlign: 'center' }}>
        {addressSecond}
      </p>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const Marker = ({ lat, lng }) => {
  const classes = useStyles();
  return <div lat={Number(lat)} lng={Number(lng)} className={classes.marker} />;
};

const NeighborhoodAndTransit = ({ title, location, address, addressSecond }) => {
  const theme = useTheme();
  const classes = useStyles();
  const mapRef = useRef();
  const [panoramaState, setPanorama] = useState(undefined);
  const [openDialog, setOpenDialog] = useState(false);

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

  const mappedSection = useMemo(() => {
    const result = [];
    if (transit) {
      const keys = Object.keys(transit);
      if (keys.length > 0) {
        keys.forEach((key) => {
          let obj = {};
          if (key === 'mta') {
            obj.section = 'MTA - Subway';
            obj.items = transit[key].map((element) => {
              return {
                miles: `${element.distance} MI`,
                name: element.station_name,
                rounds: element.routes.map((route) => ({ color: colorByName(route), value: route }))
              };
            });
            result.push(obj);
          }
          if (key === 'jitney') {
            obj.section = 'Hampton Jitney';
            obj.items = transit[key].map((element) => {
              return {
                miles: `${element.distance} MI`,
                name: element.station_name,
                rounds: element.routes.map((route) => ({ color: '#A7A9AC', value: route }))
              };
            });
            result.push(obj);
          }
          if (key === 'lirr') {
            obj.section = 'MTA - Long Island Railroad';
            obj.items = transit[key].map((element) => {
              return {
                miles: `${element.distance} MI`,
                name: element.station_name,
                rounds: element.routes.map((route) => ({ color: colorByName(route), value: route }))
              };
            });
            result.push(obj);
          }
          if (key === 'metro_north') {
            obj.section = 'MTA - Metro North';
            obj.items = transit[key].map((element) => {
              return {
                miles: `${element.distance} MI`,
                name: element.station_name,
                rounds: element.routes.map((route) => ({ color: colorByName(route), value: route }))
              };
            });
            result.push(obj);
          }
        });
      }
    }

    return result;
  }, []);

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
  return (
    <Box>
      <Panel panelTitle={title}>
        <div className={classes.wrapper}>
          <Grid container spacing={2} justify="center" className={classes.gridPadding}>
            <React.Fragment>
              <Grid item xs={12} sm={!transit ? 12 : 6}>
                <Box
                  position="relative"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <div className={classes.mapStreetWrapper}>
                    <div
                      onClick={() => {
                        setOpenDialog(true);
                      }}
                      className={classes.mapStreetButton}
                    >
                      <span className={classes.textBold}>Street View</span>
                    </div>
                  </div>
                  <GoogleMapReact
                    ref={mapRef}
                    style={
                      transit
                        ? {
                            ...mapContainerStyle,
                            height: useMediaQuery(theme.breakpoints.down(600)) ? 240 : 547
                          }
                        : onlyMapContainerStyle
                    }
                    options={{ styles: mapStyling, streetViewControl: true }}
                    bootstrapURLKeys={{ key: 'AIzaSyAql34T4IrMPnXk-19n-c-5uQ28DaUt8dM' }}
                    defaultCenter={{
                      lat: location.lat,
                      lng: location.lon
                    }}
                    defaultZoom={11}
                  >
                    <Marker lat={location.lat} lng={location.lon} />
                  </GoogleMapReact>
                </Box>
              </Grid>
              {transit !== null && transit !== undefined && (
                <Grid item xs={12} sm={6}>
                  {mappedSection.map((detail, index) => (
                    <Fragment key={index}>
                      <p className={classes.subTitle} style={{ marginTop: index !== 0 ? 24 : 0 }}>
                        {detail.section}
                      </p>
                      {detail.items.map((info) => (
                        <div key={info.name} className={classes.rowItem}>
                          <div className={classes.lineWrapper}>
                            <p className={classes.columnItem}>{info.miles}</p>
                            <p className={classes.columnItemBold}>{info.name}</p>
                          </div>
                          <div className={classes.roundWrapper}>
                            {info.rounds.map((round, i) => (
                              <Fragment key={i}>
                                {index === 0 ? (
                                  <Round color={round.color}>{round.value}</Round>
                                ) : (
                                  <RectangleLabel color={round.color}>{round.value}</RectangleLabel>
                                )}
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </Grid>
              )}
            </React.Fragment>
          </Grid>
        </div>
      </Panel>
      <Dialog
        fullWidth
        maxWidth={'lg'}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle
          id="max-width-dialog-title"
          onClose={() => {
            setOpenDialog(false);
          }}
          classesStyle={classes}
          addressSecond={addressSecond}
          address={address}
        />
        <DialogContent>
          <Box
            position="relative"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <div className={classes.mapStreetWrapperTop}>
              <div
                className={classes.mapStreetButtonTop}
                onClick={() => apiIsLoaded(mapRef.current.map_, true)}
              >
                <span className={classes.textBold}>Street View</span>
              </div>
              <div
                className={classes.mapStreetButton}
                onClick={() => apiIsLoaded(mapRef.current.map_, false)}
              >
                <span className={classes.textBold}>Map View</span>
              </div>
            </div>
            <GoogleMapReact
              ref={mapRef}
              style={
                transit
                  ? {
                      ...mapContainerStyle,
                      height: useMediaQuery(theme.breakpoints.down(600)) ? 240 : 547
                    }
                  : onlyMapContainerStyle
              }
              options={{ styles: mapStyling }}
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
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

NeighborhoodAndTransit.propTypes = {
  title: PropTypes.string,
  transit: PropTypes.shape({
    distance: PropTypes.number,
    station_name: PropTypes.string,
    routes: PropTypes.array
  })
};

export default NeighborhoodAndTransit;
