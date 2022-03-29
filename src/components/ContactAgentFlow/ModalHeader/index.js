import React from 'react';
import { IconButton } from '@material-ui/core';
import { CloseIcon } from '../icons';
import { ModalTitleContainer, ModalTitle, IconContainer } from './styled-components';

const ModalHeader = ({ title, handleClose }) => {
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

export { ModalHeader };
