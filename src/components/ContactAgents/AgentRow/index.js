import React, { useRef } from 'react';
import { AgentDetail } from '../AgentDetail';
import {
  Container,
  Cell,
  AgentName,
  AgentInfoContainer,
  PhoneText,
  AvatarContainer
} from './styled-components';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { AgentAvatarImage } from './../../AgentAvatarImage';

const AgentRow = ({ agent, ...rest }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    agent_image = '',
    display_name = null,
    brokerage_display_name = null,
    phone = null,
    email = null
  } = agent;

  if (!display_name || !brokerage_display_name) {
    return null;
  }

  return (
    <Container {...rest} isMobile={isMobile}>
      <Cell isMobile={isMobile}>
        <AvatarContainer>
          <AgentAvatarImage
            height={40}
            width={40}
            image={agent_image || ''}
            agentName={display_name}
          />
        </AvatarContainer>
        <AgentInfoContainer isMobile={isMobile}>
          <AgentName isMobile={isMobile}>
            {display_name}
            {!isMobile && <PhoneText>{phone}</PhoneText>}
          </AgentName>
          <AgentDetail icon={'briefcase'} text={brokerage_display_name} isMobile={isMobile} />
          <AgentDetail icon={'email'} text={email} isMobile={isMobile} />
          {isMobile && <AgentDetail icon={'phone'} text={phone} isMobile={isMobile} />}
        </AgentInfoContainer>
      </Cell>
    </Container>
  );
};

export { AgentRow };
