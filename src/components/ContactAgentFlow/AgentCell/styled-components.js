import styled from 'styled-components';

import { Box } from '@material-ui/core';
import { Checkbox as MUICheckbox } from '@material-ui/core';

export const Checkbox = styled(MUICheckbox)`
  .MuiSvgIcon-root {
    width: 20px;
    height: 20px;
  }
`;

export const AvatarContainer = styled(Box)`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const Container = styled.div`
  margin-top: 12px;
  min-height: 60px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e6e9eb;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 600px) {
    min-height: 42px;
  }

  .MuiCheckbox-colorSecondary.Mui-checked {
    color: #37d2be;
  }
`;

export const DisplayName = styled.div`
  font-family: GloberAdjusted;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  flex: 1;
`;
