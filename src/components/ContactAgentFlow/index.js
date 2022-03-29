import React, { useState, useMemo } from 'react';
import { Cc } from './Cc';
import { EmailTemplate } from './EmailTemplate';
import { agents } from './mock_data';
import { Recipients } from './Recipients';
import { ModalBody, ModalFooter, SendEmailButton, Container } from './styled-components';
import { EMAIL_VALIDATION_PATTERN } from './const';
import { ModalHeader } from './ModalHeader';

const isEmpty = (text) => text.length === 0;

const ContactAgentFlow = ({ isOpen, close, title = 'Contact Agent', listing }) => {
  const data = agents;
  const [emailTemplate, setEmailTemplate] = useState(null);

  const [user, setUser] = useState({
    email: '',
    phone: ''
  });

  const [emailTemplateData, setEmailTemplateData] = useState({
    subject: '',
    body: ''
  });

  const [agentsSelected, setAgentsSelected] = useState(data);

  const handleSendDataForm = () => {
    if (isValidForm) {
      let emails = [];
      if (!emailTemplate) {
        emails = agentsSelected.map(() => {
          const { subject, body } = emailTemplateData;
          return { subject, body, mail: user.email };
        });
      } else {
        emails = agentsSelected.map((agent) => {
          const subject = emailTemplate.subject({ listing, agent, user });
          const body = emailTemplate.message({ listing, agent, user });
          return { subject, body, mail: user.email };
        });
      }
    }
  };

  const isValidForm = useMemo(() => {
    const { subject, body } = emailTemplateData;
    const { email } = user;
    if (isEmpty(agentsSelected) || isEmpty(subject) || isEmpty(body) || isEmpty(email)) {
      return false;
    }
    if (!EMAIL_VALIDATION_PATTERN.test(email.toLowerCase())) return false;

    return true;
  }, [agentsSelected, emailTemplateData, user]);

  return (
    <Container open={isOpen}>
      <ModalHeader title={title} handleClose={close} />
      <ModalBody>
        <Recipients
          agents={data}
          agentsSelected={agentsSelected}
          setAgentsSelected={setAgentsSelected}
        />
        <Cc onChange={(event) => setUser((user) => ({ ...user, email: event.target.value }))} />
        <EmailTemplate
          context={'Listing Detail'}
          listing={listing}
          agentsSelected={agentsSelected}
          user={user}
          accountType={'Client'}
          onChangeDataForm={setEmailTemplateData}
          onChangeTemplate={setEmailTemplate}
        />
      </ModalBody>
      <ModalFooter>
        <SendEmailButton onClick={handleSendDataForm} disabled={!isValidForm}>
          Send Email
        </SendEmailButton>
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
// 8.- Valid form state checking input values
// 9.- Add email validation
// 10.- Select/Unselect clicking anywhere in agent cell .
// 11.- Get email templates
// 13.- Send data

// 12.- Use right modal *

// 14.- Fix preview *
// 15.- Refactor
// 16.- Add prop-types
// 17.- Find style issues
// 18.- Migrate to babylon repo
// 19.- Add api connection
