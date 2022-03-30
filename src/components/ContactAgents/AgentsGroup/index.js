import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { ContactAgentFlow } from '../../ContactAgentFlow';
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

const AgentsGroup = ({ title, subheaderText, contactButtonText, agents = [], listing }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isModalOpened, setIsModalOpened] = useState(false);

  if (agents.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
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

        <ContactButton isMobile={isMobile} onClick={() => setIsModalOpened(true)}>
          {contactButtonText}
        </ContactButton>
      </Container>
      <ContactAgentFlow
        title={contactButtonText}
        agents={agents}
        isOpen={isModalOpened}
        close={() => setIsModalOpened(false)}
        listing={listing}
        context={'Listing Detail'}
      />
    </React.Fragment>
  );
};

export { AgentsGroup };
