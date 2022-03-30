import React from 'react';
import { AgentAvatarImage } from '../../AgentAvatarImage';
import { AgentDetail } from '../AgentDetail';
import { Container, AvatarContainer, Checkbox, DisplayName } from './styled-components';
import { useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';

const AgentCell = ({ agent, showCheckbox, checked, onClickCheck }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { agent_image, display_name, brokerage_display_name, phone } = agent;
  return (
    <Container onClick={showCheckbox ? onClickCheck : undefined}>
      {showCheckbox && <Checkbox checked={checked} />}
      <AvatarContainer>
        <AgentAvatarImage height={24} width={24} image={agent_image} agentName={display_name} />
      </AvatarContainer>
      <DisplayName>{display_name}</DisplayName>
      <AgentDetail icon="briefcase" text={brokerage_display_name} />

      {!isMobile && <AgentDetail icon="phone" text={phone} />}
    </Container>
  );
};

AgentCell.propTypes = {
  agent: PropTypes.object.isRequired,
  showCheckbox: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  onClickCheck: PropTypes.func.isRequired
};

AgentCell.defaultProps = {
  showCheckbox: false,
  checked: false
};

export { AgentCell };
