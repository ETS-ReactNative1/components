import React from 'react';
import MobileViewMap from './MobileViewMap';
import { Container } from './styled-components';

const MobileView = ({ location }) => {
  return (
    <Container>
      <MobileViewMap location={location} streetView />
      <MobileViewMap location={location} />
    </Container>
  );
};

export { MobileView };
