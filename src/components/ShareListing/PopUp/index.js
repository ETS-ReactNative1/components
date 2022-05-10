import React from 'react';
import { Header } from './Header';
import { Container, Body, Footer, SubmitButton } from './styled-components';

const PopUp = ({ title, open, onClose, children, submitTextButton = '', bodyStyle = {} }) => {
  return (
    <Container open={open} onClose={onClose} fullWidth>
      <Header title={title} handleClose={onClose} />
      <Body bodyStyle={bodyStyle}>{children}</Body>
      <Footer>{!!submitTextButton && <SubmitButton>{submitTextButton}</SubmitButton>}</Footer>
    </Container>
  );
};

export default PopUp;
