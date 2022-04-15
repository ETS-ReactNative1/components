import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Truncate from './Truncated';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    padding: '7px 12px',
    border: '1px solid',
    borderRadius: 8,
    borderColor: '#9DD3D1',
    marginTop: 12,
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  }
})(Button);

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
    lineHeight: '20px',
    opacity: 0.8,
    letterSpacing: 0.2,
    paddingBottom: 8,
    margin: 0
  },
  readMore: {
    fontSize: 13,
    fontWeight: 700,
    fontFamily: 'GloberAdjusted',
    lineHeight: '18px',
    letterSpacing: 0.2,
    color: `${theme.palette.common.darkGreen}`,
    cursor: 'pointer'
  },
  wrapper: {
    marginTop: 30,
    marginBottom: 30
  }
}));

const ReadMore = ({ children, more, less, lines }) => {
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);
  const classes = useStyles();

  const handleTruncate = useCallback(
    (truncatedItem) => {
      if (truncatedItem !== truncated) {
        setTruncated(truncatedItem);
      }
    },
    [truncated]
  );

  const toggleLines = useCallback(
    (event) => {
      event.preventDefault();
      setExpanded(!expanded);
    },
    [expanded]
  );

  return (
    <React.Fragment>
      <Truncate
        lines={!expanded && lines}
        ellipsis={
          <React.Fragment>
            <span>...</span>
          </React.Fragment>
        }
        onTruncate={handleTruncate}
      >
        {children}
      </Truncate>
      <div>
        <BootstrapButton
          className={classes.readMore}
          variant="outlined"
          color="primary"
          onClick={toggleLines}
        >
          {`${!truncated && expanded ? less : more}`}
        </BootstrapButton>
      </div>
    </React.Fragment>
  );
};

ReadMore.defaultProps = {
  lines: 3,
  more: 'Read more',
  less: 'Show less'
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string
};

export default ReadMore;
