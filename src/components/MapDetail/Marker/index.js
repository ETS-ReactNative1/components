import React from 'react';
import { useStyles } from '../map-styles';

const Marker = ({ lat, lng }) => {
  const classes = useStyles();
  return <div lat={Number(lat)} lng={Number(lng)} className={classes.marker} />;
};

export { Marker };
