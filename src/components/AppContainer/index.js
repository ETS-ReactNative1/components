import React, { useMemo, useState } from "react";
import Widget from "../Widget";

const marketLocalData = {
  listed: { label: "Listed", color: "#2f465b" },
  price_decrease: { label: "Price Decrease", color: "#c9423e" },
  price_increase: { label: "Closed", color: "#2a7a7b" },
  in_contract: { label: "In Contract", color: "#ffd33f" },
  closed: { label: "Price Increase", color: "#37d2be" },
};

import useStyles from "./styles";
import Chips from "../Chips";

const filters = [
  "My Listings",
  "My Expired Listings",
  "Recently Added",
  "Open Houses",
  "In Contract",
  "Closed",
  "Price Increase",
  "Price Drop",
];

const AppContainer = () => {
  const classes = useStyles();

  const handleOnChange = () => {};
  return (
    <div className={classes.container}>
      <div className={classes.widgetsContainer}>
        <Widget
          content={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Chips
                items={filters}
                current={filters[0]}
                onChange={handleOnChange}
              />
            </div>
          }
        ></Widget>
        <Widget />
      </div>
    </div>
  );
};

export default AppContainer;
