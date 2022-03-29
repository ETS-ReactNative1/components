import React, { useMemo, useEffect, useState } from 'react';
import { Chips } from '../Chips';
import { ModalSection } from '../ModalSection';
import { Input, InputContainer, MessageInput } from './styled-components';
import { ListingTypes } from './const';
import { getEmailTemplates } from './helpers';

const NONE_CHIP = { label: 'None', value: 'none' };
const BODY_LIMIT = 2000;

const EmailTemplate = ({ context, accountType, listing, agentsSelected = [], user }) => {
  const [currentItem, setCurrentItem] = useState(NONE_CHIP);

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const isBodyValid = useMemo(() => body.length <= BODY_LIMIT, [body]);

  const listingType = useMemo(() => {
    if (listing.sales_or_rental === 'S') return ListingTypes.Sales;
    return ListingTypes.Rentals;
  }, [listing]);

  const templates = useMemo(
    () => getEmailTemplates(context, accountType, listingType),
    [context, listingType, accountType]
  );

  const itemsChips = useMemo(() => {
    const items = templates.map((template) => ({
      label: template.templateName,
      value: template.templateName
    }));
    return [NONE_CHIP, ...items];
  }, [templates]);

  useEffect(() => {
    if (currentItem.value === NONE_CHIP.value || agentsSelected.length === 0) {
      setSubject('');
      setBody('');
      return;
    }

    const template = templates.find((template) => template.templateName === currentItem.value);

    if (template) {
      const agent = agentsSelected[0];
      const subject = template.subject({ listing, agent, user });
      const message = template.message({ listing, agent, user });

      setSubject(subject);
      setBody(message);
    }
  }, [currentItem, agentsSelected, templates, user]);

  return (
    <ModalSection title="Email Template">
      <Chips items={itemsChips} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <InputContainer style={{ marginBottom: 12 }}>
        <Input
          label="Subject"
          variant="standard"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <MessageInput
          label={`Your message (${body.length}/${BODY_LIMIT})`}
          multiline
          variant="standard"
          value={body}
          valid={isBodyValid}
          onChange={(e) => setBody(e.target.value)}
        />
      </InputContainer>
    </ModalSection>
  );
};

export { EmailTemplate };
