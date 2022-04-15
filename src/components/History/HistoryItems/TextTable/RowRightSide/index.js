import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  ListingChangeContainer,
  TitleContainer,
  Dot,
  NotVerifiedLabel,
  PriceAndChangeContainer,
  PriceText,
  Title
} from './styled-components';
import { ExternalLink } from '../../../../ExternalLink';
import { ChangeLabel } from '../ChangeLabel';
import { numberWithCommas } from '../helpers';

const RowRightSide = ({ index, activity, isMobile }) => {
  const hasLinks = !!activity.links.length;
  const url = !hasLinks ? '' : activity.links[0].url;
  const linkText = !hasLinks ? '' : activity.links[0].link_text;

  return (
    <ListingChangeContainer key={`j-${index}`} isMobile={isMobile}>
      <TitleContainer>
        <Title className="activity-title">{activity.title}</Title>

        {hasLinks && (
          <Fragment>
            <Dot>&nbsp;•&nbsp;</Dot>
            {linkText.toLowerCase() === 'not verified' ? (
              <NotVerifiedLabel>{linkText}</NotVerifiedLabel>
            ) : (
              <ExternalLink text={linkText} url={url} />
            )}
          </Fragment>
        )}
      </TitleContainer>

      <PriceAndChangeContainer isMobile={isMobile}>
        <PriceText isMobile={isMobile} className="activity-price">{`$${numberWithCommas(
          activity.price
        )}`}</PriceText>

        <ChangeLabel
          isMobile={isMobile}
          className="activity-pct-change"
          change={activity.pct_change || ''}
          text={activity.pct_change_text || ''}
        />
      </PriceAndChangeContainer>
    </ListingChangeContainer>
  );
};

RowRightSide.propTypes = {
  index: PropTypes.number,
  activity: PropTypes.object,
  isMobile: PropTypes.bool
};

export { RowRightSide };
