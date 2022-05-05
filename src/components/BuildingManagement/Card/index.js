import { Typography } from '@material-ui/core';
import React from 'react';
import { CardTitle, Container, Title, Info } from './styled-components';

const Card = ({ cardTitle, title, infoList = [] }) => {
  if (!cardTitle) {
    return null;
  }

  return (
    <Container>
      {!!cardTitle && <CardTitle>{cardTitle}</CardTitle>}
      {!!title && <Title>{title}</Title>}
      {infoList.map((info) => (
        <Info>{info}</Info>
      ))}
    </Container>
  );
};

export { Card };
