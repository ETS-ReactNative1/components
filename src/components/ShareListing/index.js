import React, { useState } from 'react';
import { Container, Item } from './styled-components';
import { UserIcon, SendIcon } from '../../icons';
import Button from './Button';
import IconButton from './IconButton';
import ShareViaEmailPopUp from './ShareViaEmailPopUp';

const ShareListing = () => {
  const [isShareViaEmailPopUpOpened, setIsShareViaEmailPopUpOpened] = useState(false);

  return (
    <Container>
      <Item>
        <Button icon={<UserIcon />}>Contact Agent</Button>
      </Item>
      <Item>
        <Button icon={<SendIcon />}>Share Via Email</Button>
      </Item>
      <Item>
        <IconButton></IconButton>
      </Item>

      <ShareViaEmailPopUp open={isShareViaEmailPopUpOpened} />
    </Container>
  );
};

export { ShareListing };
