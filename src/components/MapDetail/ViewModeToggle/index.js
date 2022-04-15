import React, { useState, useRef, useEffect } from 'react';

import { Container, Toggle, ToggleItem } from './styled-components';

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

const ViewModeToggle = ({ handleOnStreetViewClick, handleOnMapViewClick }) => {
  const [currentItem, setCurrentItem] = useState(1);

  useDidMountEffect(() => {
    if (currentItem === 1) {
      return handleOnStreetViewClick();
    }
    handleOnMapViewClick();
  }, [currentItem]);

  return (
    <Container>
      <Toggle>
        <ToggleItem active={currentItem === 1} onClick={() => setCurrentItem(1)}>
          Street View
        </ToggleItem>
        <ToggleItem active={currentItem === 2} onClick={() => setCurrentItem(2)}>
          Map View
        </ToggleItem>
      </Toggle>
    </Container>
  );
};

export { ViewModeToggle };
