import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../helpers';
import { ListingTextContainer, Text, DateText } from './styled-components';

const RowLeftSide = ({ key, isMobile, text, activity }) => {
  return (
    <ListingTextContainer key={key} isMobile={isMobile} className="listing-text-container">
      {!isMobile && (
        <Fragment>
          {text && <span>Listed with &nbsp;</span>}
          <Text
            isMobile={isMobile}
            href={`listings/${activity.listing_id}`}
            target="_blank"
            className="listing-text"
          >
            {text}
          </Text>
        </Fragment>
      )}
      <DateText className="activity-date">{formatDate(activity.time)}</DateText>
    </ListingTextContainer>
  );
};

RowLeftSide.propTypes = {
  key: PropTypes.string,
  isMobile: PropTypes.bool,
  text: PropTypes.string,
  activity: PropTypes.object
};

export { RowLeftSide };
