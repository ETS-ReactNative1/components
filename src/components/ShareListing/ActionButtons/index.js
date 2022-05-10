import React, { useRef, useMemo, useState } from 'react';
import { DownloadIcon, MoreVertical, ClipboardIcon, CopyIcon } from '../../../icons';
import ActionsMenu from '../ActionsMenu';
import SharableLinkPopUp from '../ShareableLinkPop';
import { Container } from './styled-components';

const ActionButtons = () => {
  const buttonRef = useRef(null);
  const [showSharableLinkPopUp, setShowSharableLinkPopUp] = useState(false);

  const menuOptions = useMemo(() => [
    {
      label: 'Copy Link',
      icon: <CopyIcon />,
      onClick: () => setShowSharableLinkPopUp(true)
    }
  ]);

  return (
    <React.Fragment>
      <Container ref={buttonRef}>
        <MoreVertical />
      </Container>

      <ActionsMenu items={menuOptions} buttonRef={buttonRef} placement="bottom-end" />
      <SharableLinkPopUp
        open={showSharableLinkPopUp}
        onClose={() => setShowSharableLinkPopUp(false)}
      />
    </React.Fragment>
  );
};

export default ActionButtons;
