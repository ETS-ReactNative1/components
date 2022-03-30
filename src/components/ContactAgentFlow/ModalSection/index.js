import React from 'react';
import { Container, Title } from './styled-components';
import PropTypes from 'prop-types';

const ModalSection = ({ children, title, titleColor }) => {
  return (
    <Container>
      <Title titleColor={titleColor}>{title}</Title>
      {children}
    </Container>
  );
};

ModalSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  title: PropTypes.string,
  titleColor: PropTypes.string
};

ModalSection.defaultProps = {
  titleColor: '#606060'
};

export { ModalSection };
