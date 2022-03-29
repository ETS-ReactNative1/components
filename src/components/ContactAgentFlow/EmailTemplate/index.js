import React, { useMemo, useEffect, useState } from 'react';
import { Chips } from '../Chips';
import { ModalSection } from '../ModalSection';
import { Input, InputContainer, MessageInput } from './styled-components';
import { ListingTypes } from './const';
import { getEmailTemplates } from './helpers';

const NONE_CHIP = { label: 'None', value: 'none' };
const BODY_LIMIT = 2000;

const EmailTemplate = ({
  context,
  accountType,
  listing,
  agentsSelected = [],
  user,
  onChangeDataForm,
  onChangeTemplate
}) => {
  const [currentChipItem, setCurrentChipItem] = useState(NONE_CHIP);

  const [dataForm, setDataForm] = useState({
    subject: '',
    body: ''
  });

  const { subject, body } = dataForm;

  const isBodyValid = useMemo(() => body.length <= BODY_LIMIT, [body]);

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
      setDataForm({ subject: '', body: '' });
      return;
    }

    if (currentTemplate) {
      const agent = agentsSelected[0];
      const subject = currentTemplate.subject({ listing, agent, user });
      const body = currentTemplate.message({ listing, agent, user });

      setDataForm({ subject, body });
    }
  }, [currentChipItem, agentsSelected, templates, user, currentTemplate]);

  useEffect(() => {
    onChangeDataForm && onChangeDataForm({ subject, body });
  }, [subject, body]);

  useEffect(() => {
    onChangeTemplate && onChangeTemplate(currentTemplate);
  }, [currentTemplate]);

  return (
    <ModalSection title="Email Template">
      <Chips items={itemsChips} currentItem={currentChipItem} setCurrentItem={setCurrentChipItem} />
      <InputContainer style={{ marginBottom: 12 }}>
        <Input
          label="Subject"
          variant="standard"
          value={subject}
          onChange={(e) => setDataForm((value) => ({ ...value, subject: e.target.value }))}
        />
      </InputContainer>
      <InputContainer>
        <MessageInput
          label={`Your message (${body.length}/${BODY_LIMIT})`}
          multiline
          variant="standard"
          value={body}
          valid={isBodyValid}
          onChange={(e) => setDataForm((value) => ({ ...value, body: e.target.value }))}
        />
      </InputContainer>
    </ModalSection>
  );
};

export { EmailTemplate };
