import React from 'react';
import { AgentAvatarImage } from '../../AgentAvatarImage';
import { AgentDetail } from '../AgentDetail';
import { Container, AvatarContainer, Checkbox, DisplayName } from './styled-components';

const AgentCell = ({ agent, showCheckbox, checked, onClickCheck }) => {
  const { agent_image, display_name, brokerage_display_name, phone } = agent;
  return (
    <Container onClick={showCheckbox && onClickCheck}>
      {showCheckbox && <Checkbox checked={checked} />}
      <AvatarContainer>
        <AgentAvatarImage height={24} width={24} image={agent_image} agentName={display_name} />
      </AvatarContainer>
      <DisplayName>{display_name}</DisplayName>
      <AgentDetail icon="briefcase" text={brokerage_display_name} />
      <AgentDetail icon="phone" text={phone} />
    </Container>
  );
};

export { AgentCell };
