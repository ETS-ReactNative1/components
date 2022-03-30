import React from 'react';
import { ModalSection } from '../ModalSection';
import useStyles from './styles';
import { CustomEmailAutocomplete } from './styled-components';
import PropTypes from 'prop-types';

const Cc = ({ emails, onChange }) => {
  const classes = useStyles();

  return (
    <ModalSection title="CC">
      <CustomEmailAutocomplete
        classes={{ inputRoot: classes.emailAutocompleteInputRoot }}
        value={emails}
        onChangeCallback={onChange}
        extendInputProps={(props) => ({ ...props, label: 'Your email', required: true })}
      />
    </ModalSection>
  );
};

Cc.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func
};

export { Cc };
