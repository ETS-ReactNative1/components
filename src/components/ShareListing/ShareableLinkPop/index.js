import React from 'react';
import PopUp from '../PopUp';

const SharableLinkPopUp = ({ open, onClose }) => {
  return (
    <PopUp
      title={'Email Listing via Perchwell'}
      open={open}
      onClose={onClose}
      submitTextButton="Send"
    ></PopUp>
  );
};

export default SharableLinkPopUp;
