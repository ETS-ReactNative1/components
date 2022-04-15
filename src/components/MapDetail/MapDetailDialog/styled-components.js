import styled from 'styled-components';
import { Dialog } from '@material-ui/core';

export const Container = styled(Dialog)`
  .property-MuiDialog-paperWidthSm {
    max-width: 624px;
    width: 624px;
    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
      margin: 0;
      max-height: 100%;
      max-width: 100%;
    }
  }

  .MuiDialog-paperWidthSm {
    max-width: 624px;
    width: 624px;
    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
      margin: 0;
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 646px;
  position: relative;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 646px;
`;
