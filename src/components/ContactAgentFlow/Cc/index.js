import React from 'react';
import { Input } from '../EmailTemplate/styled-components';
import { ModalSection } from '../ModalSection';

const Cc = ({ onChange }) => {
  return (
    <ModalSection title="CC">
      <Input label="Your email" onChange={onChange} variant="standard" required />
    </ModalSection>
  );
};

export { Cc };
