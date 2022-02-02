import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import Types from 'prop-types';

const ChipItem = ({ item, isActive, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.container, isActive && classes.active)} {...rest}>
      {item}
    </div>
  );
};

ChipItem.propTypes = {
  item: Types.oneOfType([Types.string, Types.object]),
  isActive: Types.bool
};

export default ChipItem;
