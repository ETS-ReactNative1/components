import React from 'react';
import { IconButton } from '@material-ui/core';
import {
  Container,
  Title,
  Subtitle,
  IconContainer,
  MobileContainer,
  MobileContent,
  MobileTitle,
  MobileSubtitle
} from './styled-components';
import { CloseIcon } from './icons';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle, handleClose, isMobile = true }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {!isMobile && <Subtitle>{subtitle}</Subtitle>}

      <IconContainer>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </IconContainer>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export { Header };
