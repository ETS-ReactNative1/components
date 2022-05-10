import React from 'react';
import { IconButton } from '@material-ui/core';
import { CloseIcon } from '../../../../icons';
import { ModalTitleContainer, ModalTitle, IconContainer } from './styled-components';
import PropTypes from 'prop-types';

const Header = ({ title, handleClose }) => {
  return (
    <ModalTitleContainer>
      <ModalTitle>{title}</ModalTitle>
      <IconContainer>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </IconContainer>
    </ModalTitleContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  handleClose: PropTypes.func
};

export { Header };
