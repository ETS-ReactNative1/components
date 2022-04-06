import React from 'react';
import { ArrowDown, ArrowUp } from './icons';
import { Container, Text } from './styled-components';

function getColor(change) {
  if (change < 0) {
    return '#A82B31';
  }
  return '#2A7A7B';
}

function getIcon(change) {
  if (change < 0) {
    return <ArrowDown />;
  }

  return <ArrowUp />;
}

const ChangeLabel = ({ change, isMobile, hovered }) => {
  if (Math.abs(change) === 0) {
    return <Container />;
  }

  const color = getColor(change);
  const icon = getIcon(change);

  return (
    <Container isMobile={isMobile}>
      {icon}
      <Text hovered={hovered} color={color}>{`${change.toString().replaceAll('.', ',')}%`}</Text>
    </Container>
  );
};

export { ChangeLabel };
