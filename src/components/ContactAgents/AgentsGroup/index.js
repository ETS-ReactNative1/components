import React from "react";
import { ExternalLink } from "../../ExternalLink";
import { AgentRow } from "../AgentRow";
import {
  Container,
  Title,
  SubHeaderContainer,
  SHTextContainer,
  SHText,
  ClaimListing,
  ContactButton,
} from "./styled-components";

const AgentsGroup = ({
  title,
  subheaderText,
  contactButtonText,
  agents = [],
  onContactClick,
}) => {
  if (agents.length === 0) {
    return null;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <SubHeaderContainer>
        <SHTextContainer>
          <SHText>
            {subheaderText}&nbsp;•&nbsp;
            <ClaimListing>Claim Listing</ClaimListing>
          </SHText>
        </SHTextContainer>
        <ExternalLink
          url="www.google.com"
          text="Listing on Brokerage Website"
        />
      </SubHeaderContainer>
      {agents.map((agent, index) => (
        <AgentRow
          key={agent.id || index}
          agent={agent}
          isLast={index === agents.length - 1}
        />
      ))}

      <ContactButton onClick={onContactClick}>
        {contactButtonText}
      </ContactButton>
    </Container>
  );
};

export { AgentsGroup };
