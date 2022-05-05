import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Container, Title } from './styled-components';
import SectionTitle from './SectionTitle';
import { Tabs } from './Tabs';
import { HistoryItems } from './HistoryItems';

function getTabs(history) {
  const tabs = [];
  if (history.sales.length > 0) {
    tabs.push('Sales');
  }
  if (history.rentals.length > 0) {
    tabs.push('Rentals');
  }
  return tabs;
}

function getCurrentTag(history) {
  if (history.sales.length > 0) {
    return 'Sales';
  }
  return 'Rentals';
}

const History = ({ data }) => {
  const { current_owner, history, current_listings } = data;

  return (
    <Container>
      <SectionTitle
        title="99 Metropolitan Oval #4F"
        status="IN CONTRACT SALE 08/05/21"
        owner={current_owner}
      />
      {/* <Tabs tab={tab} onChange={setCurrentTab} isMobile={isMobile} tabs={tabs} />
      <HistoryItems history={history} tab={tab} listingsIds={current_listings_ids} /> */}
    </Container>
  );
};

export { History };
