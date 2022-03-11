import React, { useState, useEffect } from "react";
import { Container } from "./styled-components";
import TextTable from "./TextTable";

const HistoryItems = ({ history, tab, listingsIds = [] }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (tab === "Sales") {
      return setData(history.sales);
    }
    setData(history.rentals);
  }, [tab]);

  return (
    <Container>
      <TextTable data={data} listingsIds={listingsIds} />
    </Container>
  );
};

export { HistoryItems };
