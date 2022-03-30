import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Autocomplete } from '@material-ui/lab';
import { TextField, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import pluralize from 'pluralize';

import { CloseIcon } from '../../icons';

import { validateEmail, isEmailExist } from './helpers';

const useStyles = makeStyles({
  chipDeleteIcon: {
    fontSize: '9px !important'
  }
});

const EmailAutocomplete = ({ extendInputProps, value: emails, onChangeCallback, ...props }) => {
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();

  const handleChange = useCallback(
    (_, value, reason) => {
      if (reason === 'create-option') {
        const lastAddedEmail = value[value.length - 1];
        const isValid = validateEmail(lastAddedEmail);

        if (isValid) {
          if (isEmailExist(lastAddedEmail, emails)) {
            onChangeCallback([...emails]);
          } else {
            onChangeCallback([...emails, lastAddedEmail.toLowerCase()]);
          }
        }

        return;
      }

      onChangeCallback(value);
    },
    [emails, onChangeCallback]
  );

  const handleInputChange = useCallback(
    (_, value, reason) => {
      if (reason === 'reset' && !validateEmail(inputValue)) {
        return;
      }

      setInputValue(value);
    },
    [inputValue]
  );

  const handleBlur = useCallback(() => {
    if (validateEmail(inputValue)) {
      if (isEmailExist(inputValue, emails)) {
        onChangeCallback([...emails]);
      } else {
        onChangeCallback([...emails, inputValue.toLowerCase()]);
      }
    }

    setInputValue('');
  }, [emails, inputValue, onChangeCallback]);

  return (
    <Autocomplete
      value={emails}
      options={[]}
      limitTags={3}
      id="email-multiple-tags"
      renderInput={(params) => (
        <TextField {...params} label="To" {...extendInputProps(params)} onBlur={handleBlur} />
      )}
      inputValue={inputValue}
      ChipProps={{
        deleteIcon: <CloseIcon />,
        classes: {
          deleteIcon: classes.chipDeleteIcon
        }
      }}
      getLimitTagsText={(more) => <Chip label={`${more} more ${pluralize('email', more)}`} />}
      onChange={handleChange}
      onInputChange={handleInputChange}
      freeSolo
      multiple
      disableClearable
      {...props}
    />
  );
};

EmailAutocomplete.propTypes = {
  extendInputProps: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.string),
  onChangeCallback: PropTypes.func
};

EmailAutocomplete.defaultProps = {
  extendInputProps: () => {},
  value: []
};

export default EmailAutocomplete;
