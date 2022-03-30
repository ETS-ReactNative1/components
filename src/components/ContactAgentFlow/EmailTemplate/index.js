import React, { useMemo, useEffect, useState } from 'react';
import { Chips } from '../Chips';
import { ModalSection } from '../ModalSection';
import { Input, InputContainer, MessageInput } from './styled-components';
import { ListingTypes } from './const';
import { getEmailTemplates } from './helpers';

const NONE_CHIP = { label: 'None', value: 'none' };
const MESSAGE_LIMIT = 2000;

const EmailTemplate = ({
  context,
  accountType,
  listing,
  agentsSelected = [],
  user,
  formState,
  setFormState,
  onChangeTemplate
}) => {
  const [currentChipItem, setCurrentChipItem] = useState(NONE_CHIP);

  const { subject, message } = formState;

  const isMessageValid = useMemo(() => message.length <= MESSAGE_LIMIT, [message]);

  const listingType = useMemo(() => {
    if (listing.sales_or_rental === 'S') return ListingTypes.Sales;
    return ListingTypes.Rentals;
  }, [listing]);

  const templates = useMemo(
    () => getEmailTemplates(context, accountType, listingType),
    [context, listingType, accountType]
  );

  const currentTemplate = useMemo(
    () => templates.find((template) => template.templateName === currentChipItem.value),
    [templates, currentChipItem]
  );

  const itemsChips = useMemo(() => {
    const items = templates.map((template) => ({
      label: template.templateName,
      value: template.templateName
    }));
    return [NONE_CHIP, ...items];
  }, [templates]);

  useEffect(() => {
    if (currentChipItem.value === NONE_CHIP.value || agentsSelected.length === 0) {
      return;
    }

    if (currentTemplate) {
      const agent = agentsSelected[0];

      const subjectUpdated = currentTemplate.subject({ listing, agent, user });
      const messageUpdated = currentTemplate.message({ listing, agent, user });

      if (subjectUpdated !== subject || message !== messageUpdated) {
        setFormState({ subject: subjectUpdated, message: messageUpdated });
      }
    }
  }, [currentChipItem, agentsSelected, templates, user, currentTemplate, subject, message]);

  useEffect(() => {
    onChangeTemplate && onChangeTemplate(currentTemplate);
  }, [currentTemplate]);

  return (
    <ModalSection title="Email Template">
      <Chips
        items={itemsChips}
        currentItem={currentChipItem}
        setCurrentItem={(item) => {
          if (item.value === NONE_CHIP.value) {
            setFormState({ subject: '', message: '' });
          }

          setCurrentChipItem(item);
        }}
      />
      <InputContainer style={{ marginBottom: 12 }}>
        <Input
          label="Subject"
          variant="standard"
          value={subject}
          onChange={(e) => setFormState({ subject: e.target.value })}
        />
      </InputContainer>
      <InputContainer>
        <MessageInput
          label={`Your message (${message.length}/${MESSAGE_LIMIT})`}
          multiline
          variant="standard"
          value={message}
          valid={isMessageValid.toString()}
          onChange={(e) => setFormState({ message: e.target.value })}
        />
      </InputContainer>
    </ModalSection>
  );
};

const Memo = React.memo(EmailTemplate);

export { Memo as EmailTemplate };
