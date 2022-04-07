import React from 'react';
import { ListedWithMobileContainer } from './styled-components';
import PropTypes from 'prop-types';

const RowMobileTitle = ({ text, isMobile, activity }) => {
  if (!text || !isMobile) return null;

  return (
    <ListedWithMobileContainer className="listing-text-container">
      {text && <span>Listed with &nbsp;</span>}
      <Text
        isMobile={isMobile}
        href={`listings/${activity.listing_id}`}
        target="_blank"
        className="listing-text"
      >
        {text}
      </Text>
    </ListedWithMobileContainer>
  );
};

RowMobileTitle.propTypes = {
  text: PropTypes.string,
  isMobile: PropTypes.bool,
  activity: PropTypes.object
};

export { RowMobileTitle };
