// @ts-check
import React, { useEffect, useRef, useState } from "react";
import Types from "prop-types";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
} from "recharts";

import { useEventListener } from "../../hooks/useEventListener";

const useStyles = makeStyles(() => ({
  label: {
    fontWeight: 700,
    fontSize: 12,
    backgroundColor: "#EEE",
    height: "100%",
  },
}));

function isBetween(ranges, value) {
  const [range1, range2] = ranges;
  return value >= range1 && value <= range2;
}

const MarketWatchGraph = ({ data, aspect, setAspect }) => {
  const handleOnResize = () => {
    const container = document.querySelector(
      ".recharts-cartesian-grid-vertical"
    );
    if (container) {
      const [firstVerticalLine] = Array.from(container.childNodes);
      if (firstVerticalLine) {
        // @ts-ignore
        firstVerticalLine.setAttribute("stroke-dasharray", 0);
      }
    }
  };

  useEventListener("resize", handleOnResize);
  useEffect(() => {
    const timer = setTimeout(() => {
      handleOnResize();
    }, 50);
    return () => clearTimeout(timer);
  });

  const classes = useStyles();
  return (
    <div className={classes.label}>
      <ResponsiveContainer width="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3" horizontal={false} />
          <Bar dataKey="qtty" fill="#8884d8" barSize={16} radius={[0, 3, 3, 0]}>
            {data.map((item, i) => (
              <Cell key={i} fill={item.color} />
            ))}
          </Bar>
          <YAxis
            type="category"
            dataKey="label"
            width={135}
            tickLine={false}
            axisLine={false}
          />
          <XAxis type="number" dataKey="qtty" hide />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
MarketWatchGraph.propTypes = {
  data: Types.array,
  aspect: Types.number,
  setAspect: Types.func,
};

export default MarketWatchGraph;
