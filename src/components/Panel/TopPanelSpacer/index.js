import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled from 'styled-components';

export const Spacer = styled.div`
  height: 36px;
  ${({ isMobile }) =>
    isMobile && {
      height: 12
    }}
`;

const TopPanelSpacer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return <Spacer isMobile={isMobile} />;
};

export default TopPanelSpacer;
