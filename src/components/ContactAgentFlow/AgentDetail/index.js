import React from 'react';
import { Briefcase, Phone, Email } from './icons';
import { Container, IconContainer, Text } from './styled-components';
import PropTypes from 'prop-types';

const iconsMap = {
  briefcase: <Briefcase />,
  phone: <Phone />,
  email: <Email />
};

const AgentDetail = ({ icon, text, isMobile }) => {
  const iconComponent = iconsMap[icon];

  if (!text) {
    return null;
  }

  return (
    <Container>
      {!isMobile && <IconContainer>{iconComponent}</IconContainer>}
      <Text isMobile={isMobile}>{text}</Text>
    </Container>
  );
};

AgentDetail.propTypes = {
  icon: PropTypes.oneOf(['briefcase', 'phone', 'email']),
  text: PropTypes.string,
  isMobile: PropTypes.bool
};

AgentDetail.defaultProps = {
  isMobile: false
};

export { AgentDetail };
