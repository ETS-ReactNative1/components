import React from "react";
import { Briefcase, Phone, Email } from "./icons";
import { Container, IconContainer, Text } from "./styled-components";

const iconsMap = {
  briefcase: <Briefcase />,
  phone: <Phone />,
  email: <Email />,
};

const AgentDetail = ({ icon, text }) => {
  const iconComponent = iconsMap[icon];
  return (
    <Container>
      <IconContainer>{iconComponent}</IconContainer>
      <Text>{text}</Text>
    </Container>
  );
};

export { AgentDetail };
