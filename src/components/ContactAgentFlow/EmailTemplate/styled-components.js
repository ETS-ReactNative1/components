import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Input = styled(TextField)`
  width: 100%;

  .Mui-focused {
    color: #929aa2;

    input {
      font-family: GloberAdjusted;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;

      color: #000;
    }

    textarea {
      color: #000;
      font-family: GloberAdjusted;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
    }
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid #929aa2;
  }
  font-family: 'GloberAdjusted';

  .MuiInputLabel-asterisk {
    color: red;
  }
`;
