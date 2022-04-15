import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%'
  },
  topContainer: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    display: 'flex',
    zIndex: 1
  },
  activeElement: {
    fontFamily: 'GloberAdjusted',
    fontSize: 12,
    fontWeight: 700,
    color: `${theme.palette.common.white}`,
    padding: '4px 8px',
    backgroundColor: `${theme.palette.common.main_P500}`,
    borderRadius: 3,
    marginBottom: 4,
    width: 'max-content'
  },
  sponsorElement: {
    fontFamily: 'GloberAdjusted',
    fontSize: 12,
    fontWeight: 700,
    backgroundColor: `${theme.palette.common.white}`,
    padding: '4px 8px',
    color: `${theme.palette.common.main_P500}`,
    borderRadius: 3,
    marginBottom: 4,
    width: 'max-content'
  },
  buttonElement: {
    fontFamily: 'GloberAdjusted',
    fontSize: 12,
    fontWeight: 700,
    lineHeight: '16px',
    color: `${theme.palette.common.white}`,
    padding: '4px 8px',
    backgroundColor: `rgba(0, 0, 0, 0.75)`,
    opacity: 0.75,
    borderRadius: 3,
    marginLeft: 10,
    height: 24,
    cursor: 'pointer'
  }
}));

const PropertyInfo = ({
  saleOrRental,
  statusCode,
  sponsored = false,
  hasVirtualTour = false,
  hasFloorPlan = false
}) => {
  const classes = useStyles();
  const status = 'active';
  return (
    <React.Fragment>
      <div className={classes.topContainer}>
        {sponsored && (
          <span className={classes.sponsorElement}>
            SPONSOR {saleOrRental === 'S' ? 'SALE' : 'RENTAL'}
          </span>
        )}
        {status && <span className={classes.activeElement}>{status}</span>}
      </div>

      <div className={classes.buttonsContainer}>
        {hasFloorPlan && <span className={classes.buttonElement}>FLOOR PLAN</span>}
        {hasVirtualTour && <span className={classes.buttonElement}>VIRTUAL TOUR</span>}
      </div>
    </React.Fragment>
  );
};

PropertyInfo.propTypes = {
  statusCode: PropTypes.number,
  sponsored: PropTypes.bool,
  hasVirtualTour: PropTypes.bool,
  hasFloorPlan: PropTypes.bool,
  saleOrRental: PropTypes.oneOf(['R', 'S'])
};

export { PropertyInfo };
