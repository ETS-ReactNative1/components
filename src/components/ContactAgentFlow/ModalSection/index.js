import React from 'react';
import { Container, Title } from './styled-components';

const ModalSection = ({ children, title, titleColor = '#606060' }) => {
  return (
    <Container>
      <Title titleColor={titleColor}>{title}</Title>
      {children}
    </Container>
  );
};

export { ModalSection };
