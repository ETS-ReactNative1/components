import React from 'react';
import EmailAutocomplete from '../../EmailAutoComplete';
import { ModalSection } from '../ModalSection';
import useStyles from './styles';
import { CustomEmailAutocomplete } from './styled-components';

const Cc = ({ emails, onChange }) => {
  const classes = useStyles();

  return (
    <ModalSection title="CC">
      <CustomEmailAutocomplete
        classes={{ inputRoot: classes.emailAutocompleteInputRoot }}
        value={emails}
        onChangeCallback={onChange}
        extendInputProps={(props) => ({ ...props, label: 'Your email' })}
      />
    </ModalSection>
  );
};

export { Cc };
