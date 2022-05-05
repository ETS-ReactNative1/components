import React from 'react';
import { Header } from './Header';
import { Container, Body, Footer } from './styled-components';

const PopUp = ({ title, open, onClose, children }) => {
  return (
    <Container open={open} onClose={onClose}>
      <Header title={title} handleClose={onClose} />
      <Body>{children}</Body>
      <Footer></Footer>
    </Container>
  );
};

export default PopUp;
