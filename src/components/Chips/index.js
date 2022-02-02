import React, { useState, useRef, useEffect } from "react";
import useStyles from "./styles";
import ChipItem from "./ChipItem";
import Types from "prop-types";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect";
import ButtonsContainer from "./ButtonsContainer";

const Chips = ({ items, current, onChange, isLoading = false }) => {
  const [selectedItem, setSelectedItem] = useState(current);
  const [maxScrollValue, setMaxScrollValue] = useState(0);
  const [scroll, setScroll] = useState(0);
  const container = useRef(null);
  const classes = useStyles();
  const [canShowButtons, setCanShowButtons] = useState(false);

  useDidUpdateEffect(() => {
    onChange(selectedItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);
  //.scrollTo({top: 0, behavior: 'smooth'})

  useEffect(() => {
    if (container && container.current) {
      container.current.scrollLeft = scroll;
    }
  }, [scroll]);

  useEffect(() => {
    if (container && container.current) {
      setMaxScrollValue(container.current.scrollLeftMax);
    }
  }, [container]);

  return (
    <div
      className={classes.container}
      onMouseEnter={() => setCanShowButtons(true)}
      onMouseLeave={() => setCanShowButtons(false)}
    >
      <ButtonsContainer
        container={container}
        canShow={canShowButtons}
        scroll={scroll}
        setScroll={setScroll}
        max={maxScrollValue}
      />
      <div
        ref={container}
        id="chips-container"
        className={classes.chipsContainer}
      >
        {items.map((item) => (
          <ChipItem
            key={item}
            item={item}
            onClick={() => !isLoading && setSelectedItem(item)}
            isActive={selectedItem === item}
            style={isLoading ? { cursor: "wait" } : {}}
          />
        ))}
      </div>
    </div>
  );
};

Chips.propTypes = {
  onChange: Types.func,
  current: Types.string,
  items: Types.array,
  isLoading: Types.bool,
};

export default Chips;
