import React from 'react';
import { Container, ItemContainer, Divider, Row, RowWrapper } from './styled-components';
import { useMediaQuery, useTheme } from '@material-ui/core';
import TimeLineDot from './TimeLineDot';
import { RowMobileTitle } from './RowMobileTitle';
import { RowRightSide } from './RowRightSide';
import { RowLeftSide } from './RowLeftSide';

const TextTable = ({ data = [], listingsIds = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <Container>
        {data.map((item, i) => (
          <ItemContainer key={`i-${i}`}>
            {item.activity.map((activity, j) => {
              const text = j === 0 ? item.listings[0].text : '';

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
