import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import useStyles from './styles';
import { CloseIcon } from '../../../icons';

const Title = ({ onClose, children, ...otherProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="subtitle1" className={classes.text} align="center" {...otherProps}>
        {children}
      </Typography>
      <div className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClose: PropTypes.func.isRequired
};

export default Title;
