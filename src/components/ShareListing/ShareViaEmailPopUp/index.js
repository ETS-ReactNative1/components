import { Grid } from '@material-ui/core';
import React from 'react';
import PopUp from '../PopUp';
import { Input, TextArea } from './styled-components';

const ShareViaEmailPopUp = ({ open, onClose }) => {
  return (
    <React.Fragment>
      <PopUp
        title={'Email Listing via Perchwell'}
        open={open}
        onClose={onClose}
        submitTextButton="Send"
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Input label="Subject" variant="standard" />
          </Grid>
          <Grid item xs={6}>
            <Input label="Select a template for your email" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Email Subject" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextArea label="Your message" multiline variant="standard" />
          </Grid>
        </Grid>
      </PopUp>
    </React.Fragment>
  );
};

export default ShareViaEmailPopUp;
