import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Widget = ({ index, content }) => {
  const classes = useStyles();

  return <div className={classes.dragingWidget}>{content}</div>;
};

Widget.propTypes = {
  index: PropTypes.number,
  icon: PropTypes.object,
  content: PropTypes.node
};

export default memo(Widget);
