import React, { Fragment, useState } from 'react';
import {
  Container,
  ListingTextContainer,
  Text,
  DateText,
  ItemContainer,
  Divider,
  ListingChangeContainer,
  Row,
  PriceText,
  PriceAndChangeContainer,
  Title,
  TitleContainer,
  LinkContainer,
  Link,
  Dot,
  NotVerifiedLabel,
  ListedWithMobileContainer
} from './styled-components';
import { format } from 'date-fns';
import { ChangeLabel } from './ChangeLabel';
import { ExternalLinkIcon } from './icons';
import { useMediaQuery, useTheme } from '@material-ui/core';
import TimeLineDot from './TimeLineDot';

function formatDate(time) {
  return format(new Date(time), 'M-dd-yy');
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const TextTable = ({ data = [], listingsIds = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const c = { isMobile };
  const [currentRow, setCurrentRow] = useState('');

  const renderRightSide = (j, activity, hovered) => {
    const hasLinks = !!activity.links.length;
    const url = !hasLinks ? '' : activity.links[0].url;
    const linkText = !hasLinks ? '' : activity.links[0].link_text;
    return (
      <ListingChangeContainer key={`j-${j}`} {...c}>
        <TitleContainer>
          <Title hovered={hovered}>{activity.title}</Title>

          {hasLinks && (
            <Fragment>
              <Dot>&nbsp;•&nbsp;</Dot>
              {linkText.toLowerCase() === 'not verified' ? (
                <NotVerifiedLabel>{linkText}</NotVerifiedLabel>
              ) : (
                <LinkContainer href={url} target="_blank">
                  <Link>{linkText}</Link>
                  <ExternalLinkIcon />
                </LinkContainer>
              )}
            </Fragment>
          )}
        </TitleContainer>

        <PriceAndChangeContainer {...c}>
          <PriceText {...c}>{`$${numberWithCommas(activity.price)}`}</PriceText>

          <ChangeLabel
            {...c}
            hovered={hovered}
            change={activity.pct_change}
            text={activity.pct_change_text}
          />
        </PriceAndChangeContainer>
      </ListingChangeContainer>
    );
  };

  const renderLeftSide = (key, hovered, isMobile, text, activity) => {
    return (
      <ListingTextContainer key={key} hovered={hovered} {...c}>
        {!isMobile && (
          <React.Fragment>
            {text && <span>Listed with &nbsp;</span>}
            <Text
              {...c}
              href={activity.listing_id}
              target="_blank"
              class="listing-text"
              hovered={hovered}
            >
              {text}
            </Text>
          </React.Fragment>
        )}
        <DateText hovered={hovered}>{formatDate(activity.time)}</DateText>
      </ListingTextContainer>
    );
  };

  return (
    <React.Fragment>
      <Container>
        {data.map((item, i) => (
          <ItemContainer key={`i-${i}`}>
            {item.activity.map((activity, j) => {
              const text = j === 0 ? item.listings[0].text : '';

              const isLastActivity = j === item.activity.length - 1 && i === data.length - 1;
              const key = `i-${i}-j-${j}`;

              const hovered = currentRow === key;
              return (
                <div onMouseEnter={() => setCurrentRow(key)} onMouseLeave={() => setCurrentRow('')}>
                  {isMobile && !!text && (
                    <ListedWithMobileContainer hovered={hovered}>
                      {text && <span>Listed with &nbsp;</span>}
                      <Text
                        {...c}
                        href={activity.listing_id}
                        target="_blank"
                        class="listing-text"
                        hovered={hovered}
                      >
                        {text}
                      </Text>
                    </ListedWithMobileContainer>
                  )}
                  <Row {...c}>
                    {renderLeftSide(key, hovered, isMobile, text, activity)}
                    <TimeLineDot
                      currentListingsIds={listingsIds}
                      terminus={activity.terminus}
                      listingId={activity.listing_id}
                      id={`dot-${i}-${j}`}
                      isLast={isLastActivity}
                    />
                    {renderRightSide(j, activity, hovered)}
                  </Row>
                </div>
              );
            })}

            {i < data.length - 1 && <Divider {...c} />}
          </ItemContainer>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default TextTable;
