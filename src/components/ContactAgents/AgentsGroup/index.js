import { useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { ExternalLink } from '../../ExternalLink';
import { AgentRow } from '../AgentRow';
import {
  Container,
  Title,
  SubHeaderContainer,
  SHTextContainer,
  SHText,
  ClaimListing,
  ContactButton
} from './styled-components';

const AgentsGroup = ({ title, subheaderText, contactButtonText, agents = [], onContactClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (agents.length === 0) {
    return null;
  }

  return (
    <Container isMobile={isMobile}>
      <Title>{title}</Title>
      <SubHeaderContainer isMobile={isMobile}>
        <SHTextContainer isMobile={isMobile}>
          <SHText>
            {subheaderText}
            {!isMobile ? <span>&nbsp;•&nbsp;</span> : <span>&nbsp;</span>}
            <ClaimListing>Claim Listing</ClaimListing>
          </SHText>
        </SHTextContainer>
        <ExternalLink url="www.google.com" text="Listing on Brokerage Website" />
      </SubHeaderContainer>
      {agents.map((agent, index) => (
        <AgentRow key={agent.id || index} agent={agent} isLast={index === agents.length - 1} />
      ))}

      <ContactButton isMobile={isMobile} onClick={onContactClick}>
        {contactButtonText}
      </ContactButton>
    </Container>
  );
};

export { AgentsGroup };
