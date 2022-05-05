import React from 'react';
import { Container, PlaceHolder, Item } from './styled-components';
import { useMediaQuery, useTheme } from '@material-ui/core';

const Tabs = ({ items, active, onChange }) => {
  const total = items.length;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container isMobile={isMobile}>
      <PlaceHolder>
        {items.map((item, index) => (
          <Item onClick={() => onChange(item)} key={index} total={total} isActive={item === active}>
            {item}
          </Item>
        ))}
      </PlaceHolder>
    </Container>
  );
};

export default Tabs;
