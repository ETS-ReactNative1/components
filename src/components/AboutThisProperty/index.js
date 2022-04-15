import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReadMore from './ReadMore';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'GloberAdjusted',
    lineHeight: '24px',
    letterSpacing: -0.2,
    paddingBottom: 34,
    margin: 0,
    width: '100%'
  },
  description: {
    fontSize: 15,
    fontFamily: 'GloberAdjusted',
    lineHeight: '20px',
    opacity: 0.8,
    letterSpacing: 0.2,
    paddingBottom: 8,
    margin: 0
  },
  readMore: {
    fontSize: 15,
    fontWeight: 700,
    fontFamily: 'GloberAdjusted',
    lineHeight: '20px',
    letterSpacing: 0.2,
    margin: 0,
    color: `${theme.palette.common.darkGreen}`,
    cursor: 'pointer'
  },
  wrapper: {
    marginTop: 30,
    marginBottom: 30
  }
}));

const AboutThisProperty = ({ text, title }) => {
  const classes = useStyles();

  return (
    <Box>
      <div className={classes.wrapper}>
        <p className={classes.title}>{title}</p>
        <ReadMore less="Read Less" more="Read More" lines={3}>
          {text}
        </ReadMore>
      </div>
    </Box>
  );
};

AboutThisProperty.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default AboutThisProperty;
