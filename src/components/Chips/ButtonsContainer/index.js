import React, { useMemo } from "react";
import ScrollButton from "../ScrollButton";
import useStyles from "./styles";

const ButtonsContainer = ({ container, canShow, scroll, setScroll, max }) => {
  const classes = useStyles();

  const scrollTo = (direction) => {
    if (container && container.current) {
      if (direction === "right") {
        setScroll((value) => Math.max(0, value + 300));
      } else {
        const max = container.current.scrollLeftMax;
        setScroll((value) => Math.min(max, value - 300));
      }
    }
  };

  const canScrollToLeft = useMemo(() => {
    if (container && container.current) {
      return scroll > 0;
    }
    return false;
  }, [scroll]);

  const canScrollToRight = useMemo(() => {
    if (container && container.current) {
      return scroll < max;
    }
    return false;
  }, [scroll, max]);

  return (
    <div className={classes.container}>
      {canShow ? (
        <ScrollButton
          onClick={() => scrollTo("left")}
          children={`<`}
          style={{ opacity: canScrollToLeft ? 1 : 0 }}
        />
      ) : (
        <div />
      )}
      {canShow ? (
        <ScrollButton
          onClick={() => scrollTo("right")}
          children={`>`}
          style={{ opacity: canScrollToRight ? 1 : 0 }}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default React.memo(ButtonsContainer);
