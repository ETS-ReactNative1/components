import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Input = styled(TextField)`
  width: 100%;

  .MuiAutocomplete-inputRoot[class*='MuiInput-root'] {
    padding-bottom: 12px;
  }

  .MuiInputLabel-root {
    font-family: GloberAdjusted;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    color: #000;
  }

  .MuiInput-input {
    font-family: GloberAdjusted;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    color: #000;

    &:focus {
      font-family: GloberAdjusted;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.20000000298023224px;
      color: #000;
    }
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid #929aa2;
  }

  .Mui-focused {
    color: #000;
  }

  .MuiInput-underline:after {
    border-bottom: 1px solid #929aa2;
  }
  font-family: 'GloberAdjusted';

  .MuiInputLabel-asterisk {
    color: red;
  }
  .MuiInputBase-input {
    padding-bottom: 12px;
  }
  .MuiInputLabel-root {
    font-family: GloberAdjusted;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    color: #929aa2;
  }
`;

export const TextArea = styled(Input)`
  .MuiInput-input {
    color: #37d2be;
  }

  .property-MuiInputLabel-formControl.Mui-focused {
    color: #37d2be;
  }

  .MuiFormHelperText-root {
    color: #000;
  }
`;
