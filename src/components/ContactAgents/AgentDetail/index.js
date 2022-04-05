import React from 'react';
import { Briefcase, Phone, Email } from './icons';
import { Container, IconContainer, Text } from './styled-components';

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
    <Container isMobile={isMobile}>
      {!isMobile && <IconContainer>{iconComponent}</IconContainer>}
      <Text isMobile={isMobile}>{text}</Text>
    </Container>
  );
};

export { AgentDetail };
