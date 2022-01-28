import React, { useMemo, useState } from "react";
import Widget from "../Widget";

import MarketWatchGraph from "../MarketWatchGraph";

const marketLocalData = {
  listed: { label: "Listed", color: "#2f465b" },
  price_decrease: { label: "Price Decrease", color: "#c9423e" },
  price_increase: { label: "Closed", color: "#2a7a7b" },
  in_contract: { label: "In Contract", color: "#ffd33f" },
  closed: { label: "Price Increase", color: "#37d2be" },
};

import useStyles from "./styles";

const AppContainer = () => {
  const data = {
    data: {
      closed: 0,
      listed: 9,
      in_contract: 0,
      price_decrease: 8,
      price_increase: 5,
    },
  };

  const classes = useStyles();
  const [aspect, setAspect] = useState(1.6);

  const chartData = useMemo(
    () =>
      !data
        ? null
        : Object.keys(data.data).map((marketKey) => ({
            label: `${marketLocalData[marketKey].label} (${data.data[marketKey]})`,
            qtty: data.data[marketKey],
            color: marketLocalData[marketKey].color,
          })),
    [data]
  );

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
              <div style={{ height: 114.25, backgroundColor: "green" }}>
                <input
                  onChange={(event) => {
                    event.preventDefault();
                    const value = event.target.value;
                    console.log("Value", value);
                    setAspect(value);
                  }}
                  placeholder={"Set event"}
                  defaultValue={1.6}
                  type="number"
                />
              </div>
              <MarketWatchGraph
                data={chartData}
                aspect={aspect}
                setAspect={setAspect}
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
