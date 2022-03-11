import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Container, Title } from "./styled-components";
import SectionTitle from "./SectionTitle";
import { Tabs } from "./Tabs";
import { HistoryItems } from "./HistoryItems";

const History = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tab, setCurrentTab] = useState("Sales");
  const { current_owner, history, current_listings } = data;
  const current_listings_ids = current_listings.map((listing) => listing.id);
  return (
    <Container>
      <Title>History</Title>
      <SectionTitle
        title="99 Metropolitan Oval #4F"
        status="IN CONTRACT SALE 08/05/21"
        owner={current_owner}
      />
      <Tabs tab={tab} onChange={setCurrentTab} isMobile={isMobile} />
      <HistoryItems
        history={history}
        tab={tab}
        listingsIds={current_listings_ids}
      />
    </Container>
  );
};

export { History };
