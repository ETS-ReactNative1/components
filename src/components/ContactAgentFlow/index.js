import React, { useState, useReducer, useCallback, useMemo } from 'react';
import { Cc } from './Cc';
import { EmailTemplate } from './EmailTemplate';
import { Recipients } from './Recipients';
import { ModalBody, ModalFooter, SendEmailButton, Container } from './styled-components';
import { ModalHeader } from './ModalHeader';
import reducer, { initialState } from './reducer';
import CustomizedSnackbars from '../SnackBars';
import { getEmailsData, getEmailsDataFromTemplate } from './helpers';

const isEmpty = (text) => text.length === 0;

const SUBJECT_LENGTH_LIMIT = 100;
const MESSAGE_LENGTH_LIMIT = 2000;

const ContactAgentFlow = ({
  isOpen,
  close,
  title = 'Contact Agent',
  listing,
  agents = [],
  context = 'Listing Detail'
}) => {
  const data = agents;
  const [emailTemplate, setEmailTemplate] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formState, setFormState] = useReducer(reducer, initialState);
  const [agentsSelected, setAgentsSelected] = useState(data);

  const { emails, subject, message } = formState;

  const firstUser = useMemo(
    () => (isEmpty(emails) ? { email: '' } : { email: emails[0] }),
    [emails]
  );

  const isEmptySubject = subject.trim().length === 0;
  const isEmptyMessage = message.trim().length === 0;
  const isInvalidSubjectLength = subject.length > SUBJECT_LENGTH_LIMIT;
  const isInvalidMessageLength = message.length > MESSAGE_LENGTH_LIMIT;

  const isSendButtonDisabled =
    emails.length === 0 ||
    isEmptySubject ||
    isEmptyMessage ||
    isInvalidSubjectLength ||
    isInvalidMessageLength ||
    isEmpty(agentsSelected);

  const handleSendDataForm = () => {
    setOpenSnackbar(true);

    if (!isSendButtonDisabled) {
      let emailsData = [];
      const hasTemplate = !!emailTemplate;
      if (!hasTemplate) {
        emailsData = getEmailsData(agentsSelected, subject, message);
      } else {
        emailsData = getEmailsDataFromTemplate(emails, agentsSelected, emailTemplate, listing);
      }

      console.log('emailsData', emailsData);
    }
  };

  const handleEmailsChange = useCallback((value) => setFormState({ emails: value }), []);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <React.Fragment>
      <Container open={isOpen}>
        <ModalHeader title={title} handleClose={close} />
        <ModalBody>
          <Recipients
            agents={data}
            agentsSelected={agentsSelected}
            setAgentsSelected={setAgentsSelected}
          />
          <Cc emails={emails} onChange={handleEmailsChange} />
          <EmailTemplate
            context={context}
            listing={listing}
            agentsSelected={agentsSelected}
            user={firstUser}
            accountType={'Client'}
            formState={formState}
            setFormState={setFormState}
            onChangeTemplate={setEmailTemplate}
          />
        </ModalBody>
        <ModalFooter>
          <SendEmailButton onClick={handleSendDataForm} disabled={isSendButtonDisabled}>
            Send Email
          </SendEmailButton>
        </ModalFooter>
      </Container>

      <CustomizedSnackbars
        open={openSnackbar}
        handleClose={handleCloseSnackbar}
        text={'Your email has been sent successfully'}
      />
    </React.Fragment>
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
// 21.- Add snack bar
// 22.- Add limit subject message
// 14.- Fix preview *

// 20.- Add mobile version

// 15.- Refactor
// 16.- Add prop-types
// 17.- Find style issues
// 18.- Migrate to babylon repo
// 19.- Add api connection
