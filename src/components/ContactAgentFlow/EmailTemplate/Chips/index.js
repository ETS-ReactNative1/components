import React from 'react';
import { Container, Chip } from './styled-components';
import PropTypes from 'prop-types';

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

Chips.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,
  currentItem: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  setCurrentItem: PropTypes.func.isRequired
};

export { Chips };
