import React from 'react';
import { Container, ItemContainer, Divider, Row, RowWrapper } from './styled-components';
import { useMediaQuery, useTheme } from '@material-ui/core';
import TimeLineDot from './TimeLineDot';
import { RowMobileTitle } from './RowMobileTitle';
import { RowRightSide } from './RowRightSide';
import { RowLeftSide } from './RowLeftSide';

function getActivityText(item, j) {
  try {
    if (j === 0 && item.listings.length > 0) {
      const text = item.listings[0].text;
      return text;
    }
    return '';
  } catch (e) {
    return '';
  }
}

const TextTable = ({ data = [], listingsIds = [] }) => {
  console.log('data', data);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <Container>
        {data.map((item, i) => (
          <ItemContainer key={`i-${i}`}>
            {item.activity.map((activity, j) => {
              const text = getActivityText(item, j);

              const isLastActivity = j === item.activity.length - 1 && i === data.length - 1;
              const key = `i-${i}-j-${j}`;

              return (
                <RowWrapper key={key}>
                  <RowMobileTitle text={text} isMobile={isMobile} />
                  <Row isMobile={isMobile}>
                    <RowLeftSide key={key} isMobile={isMobile} text={text} activity={activity} />
                    <TimeLineDot
                      currentListingsIds={listingsIds}
                      terminus={activity.terminus}
                      listingId={activity.listing_id}
                      id={`dot-${i}-${j}`}
                      isLast={isLastActivity}
                    />
                    <RowRightSide index={j} activity={activity} isMobile={isMobile} />
                  </Row>
                </RowWrapper>
              );
            })}

            {i < data.length - 1 && <Divider isMobile={isMobile} />}
          </ItemContainer>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default TextTable;
