import React, { useState, useMemo } from 'react';
import { Cc } from './Cc';
import { EmailTemplate } from './EmailTemplate';
import { agents } from './mock_data';
import { Recipients } from './Recipients';
import { IconButton } from '@material-ui/core';
import { CloseIcon } from './icons';
import {
  ModalTitleContainer,
  ModalTitle,
  ModalBody,
  ModalFooter,
  SendEmailButton,
  IconContainer,
  Container
} from './styled-components';

const ContactAgentFlow = ({ isOpen, close, title = 'Contact Agent', listing }) => {
  const data = agents;

  const [user, setUser] = useState({
    email: '',
    phone: ''
  });

  const [agentsSelected, setAgentsSelected] = useState(data);

  const isValidForm = useMemo(() => {
    if (agentsSelected.length === 0) return false;
    return true;
  }, [agentsSelected]);

  return (
    <Container open={isOpen} fullWidth>
      <ModalTitleContainer>
        <ModalTitle>{title}</ModalTitle>
        <IconContainer>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </IconContainer>
      </ModalTitleContainer>
      <ModalBody>
        <Recipients
          agents={data}
          agentsSelected={agentsSelected}
          setAgentsSelected={setAgentsSelected}
        />
        <Cc
          onChange={(event) => {
            event.preventDefault();
            setUser((user) => ({ ...user, email: event.target.value }));
          }}
        />
        <EmailTemplate
          context={'Listing Detail'}
          listing={listing}
          agentsSelected={agentsSelected}
          user={user}
          accountType={'Client'}
        />
      </ModalBody>
      <ModalFooter>
        <SendEmailButton disabled={!isValidForm}>Send Email</SendEmailButton>
      </ModalFooter>
    </Container>
  );
};

export { ContactAgentFlow };

// 1.- Add dialog
// 2.- Add close icon
// 3.- Hide checkbox when only 1 agent appears
// 4.- Select/Deselect agents
// 5.- Show error message no recipients selected
// 6.- Add enable disable function
// 7.- Fix font styles on inputs
