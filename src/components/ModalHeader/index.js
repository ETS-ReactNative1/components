import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

import { CloseIcon } from '../../icons';

import useStyles from './styles';

const ModalHeader = ({ handleClose, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box className={classes.titleContainer}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      </Box>
      <div className={classes.closeButton} onClick={handleClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default ModalHeader;
