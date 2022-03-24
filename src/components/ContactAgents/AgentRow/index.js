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
import { IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import { EllipsisIcon, PhoneIcon, MailIcon } from './icons';
import ActionsMenu from '../../ActionsMenu';
import { AgentAvatarImage } from './../../AgentAvatarImage';

const AgentRow = ({ agent, ...rest }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    agent_image = null,
    display_name = null,
    brokerage_display_name = null,
    phone = null,
    email = null
  } = agent;

  const buttonRef = useRef(null);

  if (!agent_image || !display_name || !brokerage_display_name || !phone || !email) {
    return null;
  }

  const menuOptions = [
    {
      label: 'Call',
      icon: <PhoneIcon />,
      onClick: () => {
        window.open(`tel:${phone}`);
      }
    },
    {
      label: 'Email',
      icon: <MailIcon />,
      onClick: () => {
        window.open(`mailto:${email}`);
      }
    }
  ];

  return (
    <Container {...rest} isMobile={isMobile}>
      <Cell isMobile={isMobile}>
        <AvatarContainer>
          <AgentAvatarImage height={40} width={40} image={agent_image} agentName={display_name} />
        </AvatarContainer>
        <AgentInfoContainer isMobile={isMobile}>
          <AgentName isMobile={isMobile}>
            {display_name}
            {!isMobile && <PhoneText>{phone}</PhoneText>}
          </AgentName>
          <AgentDetail icon={'briefcase'} text={brokerage_display_name} isMobile={isMobile} />
          <AgentDetail icon={'email'} text={email} isMobile={isMobile} />

          {isMobile && <AgentDetail icon={'phone'} text={phone} isMobile={isMobile} />}

          {!isMobile && (
            <IconButton ref={buttonRef}>
              <EllipsisIcon />
            </IconButton>
          )}
        </AgentInfoContainer>

        <ActionsMenu items={menuOptions} buttonRef={buttonRef} placement="bottom-end" />
      </Cell>
    </Container>
  );
};

export { AgentRow };
