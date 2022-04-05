import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    height: 1
  }
}));

/** @type React.FC<import('@material-ui/core').BoxProps> */
const Divider = (props) => {
  const classes = useStyles();
  return <Box {...props} className={classes.root} />;
};

export default Divider;
