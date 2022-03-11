import React, { useState, useEffect } from "react";
import { useEventListener } from "../../../../../hooks/useEventListener";
import { Container, Dot, LineDots } from "./styled-components";

function getColors(currentListingsIds, listingId, terminus) {
  if (currentListingsIds.includes(listingId)) {
    return { background: "#37D2BE", border: "#37D2BE" };
  }
  if (terminus) {
    return { background: "#E6E9EB", border: "#E6E9EB" };
  }
  return { background: "#fff", border: "#E6E9EB" };
}

function getPositionAtCenter(element) {
  const { top, left, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

function getDistanceBetweenElements(a, b) {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);

  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
}

function getCurrentAndNextDotIds(id) {
  const dots = Array.from(document.querySelectorAll(".time-line-dot"));
  let dotIndex = 0;
  for (const index = 0; index < dots.length; index++) {
    if (dots[index].id === id) {
      dotIndex = index;
      break;
    }
  }

  const current = dots[dotIndex].id;
  let next = null;
  if (dotIndex + 1 < dots.length) {
    next = dots[dotIndex + 1].id;
  }

  return { current, next };
}

const TimeLineDot = ({
  currentListingsIds,
  terminus,
  listingId,
  isLast,
  id,
  ...rest
}) => {
  const colors = getColors(currentListingsIds, listingId, terminus);

  const [height, setHeight] = useState(0);

  const renderDotLines = () => {
    const { current, next } = getCurrentAndNextDotIds(id);
    console.log("current, next", current, next);
    if (!!next) {
      const distance = getDistanceBetweenElements(
        document.getElementById(current),
        document.getElementById(next)
      );
      setHeight(distance);
    }
  };

  useEventListener("resize", renderDotLines);

  useEffect(() => {
    const timer = setTimeout(() => renderDotLines(), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Dot {...colors} id={id} {...rest} className={"time-line-dot"} />
      {!isLast && <LineDots height={height} />}
    </Container>
  );
};

export default TimeLineDot;
