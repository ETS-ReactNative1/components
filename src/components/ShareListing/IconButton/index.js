import React, { useRef } from 'react';
import { DownloadIcon, MoreVertical } from '../../../icons';
import ActionsMenu from '../ActionsMenu';
import { Container } from './styled-components';

const menuOptions = [
  {
    label: 'Edit',
    icon: <DownloadIcon />,
    onClick: () => console.log(`1`)
  },
  { label: 'View', icon: <DownloadIcon />, onClick: () => console.log(`2`) },
  { label: 'Copy Link', icon: <DownloadIcon />, onClick: () => console.log(`3`) }
];

const IconButton = () => {
  const buttonRef = useRef(null);

  return (
    <React.Fragment>
      <Container ref={buttonRef}>
        <MoreVertical />
      </Container>

      <ActionsMenu items={menuOptions} buttonRef={buttonRef} placement="bottom-end" />
    </React.Fragment>
  );
};

export default IconButton;
