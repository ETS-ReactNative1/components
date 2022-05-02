import React, { useState, useCallback } from 'react';
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
  ContactButton,
  ContactButtonContainer
} from './styled-components';

const AgentsGroup = ({
  title,
  subheaderText,
  contactButtonText,
  agents = [],
  listing,
  brokerageLink
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [agentsSelected, setAgentsSelected] = useState([]);

  if (agents.length === 0) {
    return null;
  }

  const handleOnAgentClick = useCallback((agent) => {
    setAgentsSelected([agent]);
    setIsModalOpened(true);
  }, []);

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
          {!!brokerageLink && <ExternalLink {...brokerageLink} />}
        </SubHeaderContainer>
        {agents.map((agent, index) => (
          <AgentRow
            onClick={() => handleOnAgentClick(agent)}
            key={agent.id || index}
            agent={agent}
            isLast={index === agents.length - 1}
          />
        ))}

        <ContactButtonContainer>
          <ContactButton
            isMobile={isMobile}
            onClick={() => {
              setAgentsSelected(agents);
              setIsModalOpened(true);
            }}
          >
            {contactButtonText}
          </ContactButton>
        </ContactButtonContainer>
      </Container>
      <ContactAgentFlow
        title={contactButtonText}
        agents={agentsSelected}
        isOpen={isModalOpened}
        close={() => setIsModalOpened(false)}
        listing={listing}
        context={'Listing Detail'}
      />
    </React.Fragment>
  );
};

export { AgentsGroup };
