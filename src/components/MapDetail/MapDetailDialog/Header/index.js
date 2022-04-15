import React from 'react';
import { IconButton } from '@material-ui/core';
import { Container, Title, Subtitle, IconContainer } from './styled-components';
import { CloseIcon } from './icons';

const Header = ({ title, handleClose, subtitle = '' }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <IconContainer>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </IconContainer>
    </Container>
  );
};

export { Header };
