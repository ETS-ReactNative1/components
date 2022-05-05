import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Panel from '../Panel';
import { ExternalLink } from '../ExternalLink';

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
  subTitle: {
    fontSize: 20,
    fontFamily: 'GloberAdjusted',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: 0.2,
    paddingBottom: 19,
    margin: 0,
    color: '#3b5568'
  },
  wrapper: {
    marginTop: 36,
    marginBottom: 40,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 12
    }
  },
  columnItem: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 13,
    lineHeight: '18px',
    letterSpacing: 0.2,
    color: theme.palette.common.darkGrey,
    opacity: 0.75,
    fontWeight: 400
  },
  columnLinkItem: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 13,
    lineHeight: '18px',
    letterSpacing: 0.2,
    color: '#2A7A7B',
    opacity: 0.75,
    fontWeight: 400,
    cursor: 'pointer',
    textDecoration: 'none'
  },
  columnItemBold: {
    margin: 0,
    fontFamily: 'GloberAdjusted',
    fontSize: 13,
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: 0.2,
    color: theme.palette.common.darkGrey
  },
  rowItem: {
    borderBottom: `1px solid ${theme.palette.common.neutrals_N100}`,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 6,
    flexWrap: 'wrap'
  },
  gridPadding: {
    marginBottom: 40
  },
  heading: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'GloberAdjusted',
    lineHeight: '24px',
    letterSpacing: -0.2,
    marginTop: 20,
    width: '100%'
  }
}));

const Element = ({ item }) => {
  const classes = useStyles();

  const { title, value, url = '' } = item;
  if (value === 'Link' && !!url) {
    return (
      <div className={classes.rowItem}>
        <p className={classes.columnItemBold}>{title}</p>
        <a className={classes.columnLinkItem} rel="noreferrer" target="_blank" href={url}>
          {value}
        </a>
      </div>
    );
  }
  return (
    <div className={classes.rowItem}>
      <p className={classes.columnItemBold}>{title}</p>
      <p className={classes.columnItem}>{value}</p>
    </div>
  );
};

const MoreInfo = ({ amenities, title, brokerageUrl }) => {
  const classes = useStyles();
  return (
    <Box>
      <Panel panelTitle={title}>
        <div className={classes.wrapper}>
          {amenities.subsections.map((amenity) => (
            <Fragment key={amenity.title}>
              <p className={classes.subTitle}>{amenity.title}</p>
              <Grid container spacing={4} justify="center" className={classes.gridPadding}>
                <React.Fragment>
                  <Grid item xs={12} sm={6}>
                    {amenity.elements
                      .filter((elem, index) => index % 2 === 0)
                      .map((item) => (
                        <Element key={item.title} item={item} />
                      ))}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {amenity.elements
                      .filter((elem, index) => index % 2 !== 0)
                      .map((item) => (
                        <Element key={item.title} item={item} />
                      ))}
                  </Grid>
                </React.Fragment>
              </Grid>
            </Fragment>
          ))}
        </div>
      </Panel>
    </Box>
  );
};

MoreInfo.propTypes = {
  title: PropTypes.string,
  amenities: PropTypes.shape({
    subsections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string
      })
    )
  })
};

export default MoreInfo;
