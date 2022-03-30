import React from 'react';
import { Container, Chip } from './styled-components';

const Chips = ({ items = [], currentItem, setCurrentItem }) => {
  return (
    <Container>
      {items.map((item) => (
        <Chip
          key={item.label}
          active={currentItem.value === item.value}
          onClick={() => setCurrentItem(item)}
        >
          {item.label}
        </Chip>
      ))}
    </Container>
  );
};

export { Chips };
