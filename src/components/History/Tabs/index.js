import React, { useState } from "react";
import {
  Container,
  TabContainer,
  TabItem,
  PlaceholderTabContainer,
  PlaceHolderTabItem,
} from "./styled-components";

const tabs = ["Sales", "Rentals"];

const Tabs = ({ tab: currentTab, onChange, isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      <PlaceholderTabContainer isMobile={isMobile}>
        {tabs.map((tab) => (
          <PlaceHolderTabItem isMobile={isMobile} key={tab}>
            {tab}
          </PlaceHolderTabItem>
        ))}
      </PlaceholderTabContainer>
      <TabContainer isMobile={isMobile}>
        {tabs.map((tab) => (
          <TabItem
            key={tab}
            active={tab === currentTab}
            onClick={() => onChange(tab)}
            isMobile={isMobile}
          >
            {tab}
          </TabItem>
        ))}
      </TabContainer>
    </Container>
  );
};

export { Tabs };
