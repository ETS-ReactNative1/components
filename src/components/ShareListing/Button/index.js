import React from 'react';
import { Container } from './styled-components';

const Button = ({ children, icon, onClick, ...rest }) => {
  return (
    <Container onClick={onClick} {...rest}>
      {icon}
      <span>{children}</span>
    </Container>
  );
};

export default Button;
