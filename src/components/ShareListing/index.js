import React, { useState } from 'react';
import { Container, Item } from './styled-components';
import { UserIcon, SendIcon } from '../../icons';
import Button from './Button';
import ActionButtons from './ActionButtons';
import ShareViaEmailPopUp from './ShareViaEmailPopUp';

const ShareListing = () => {
  const [isShareViaEmailPopUpOpen, setIsShareViaEmailPopUpOpen] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <Item>
          <Button icon={<UserIcon />}>Contact Agent</Button>
        </Item>
        <Item>
          <Button icon={<SendIcon />} onClick={() => setIsShareViaEmailPopUpOpen(true)}>
            Share Via Email
          </Button>
        </Item>
        <Item>
          <ActionButtons open={isShareViaEmailPopUpOpen} />
        </Item>
      </Container>
      <ShareViaEmailPopUp
        open={isShareViaEmailPopUpOpen}
        onClose={() => setIsShareViaEmailPopUpOpen(false)}
      />
    </React.Fragment>
  );
};

//TODO:

//1.- Copy TextField styles from Babylon repo - ok
//2.- Update icons on actions button
//3.- Copy Link flow

export { ShareListing };
