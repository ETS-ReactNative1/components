import styled from 'styled-components';

import EmailAutocomplete from '../../EmailAutoComplete';

export const CustomEmailAutocomplete = styled(EmailAutocomplete)`
  width: 100%;

  .MuiAutocomplete-inputRoot[class*='MuiInput-root'] {
    padding-bottom: 10px;
  }

  .MuiAutocomplete-tag {
    margin-right: 12px;
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

  .MuiInput-input {
    caret-color: #37d2be;
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
    color: #929aa2;
  }

  .MuiInput-underline:after {
    border-bottom: 1px solid #929aa2;
  }
  font-family: 'GloberAdjusted';

  .MuiInputLabel-asterisk {
    color: red;
  }

  .MuiChip-root {
    background-color: #37d2be;
    color: white;
    height: 24px;
    border-radius: 100px;
    padding: 5.5px 12px;

    .MuiChip-label {
      padding-left: 0px;
      padding-right: 16px;
    }

    svg {
      fill: white;
      height: 7px;
      width: 7px;
    }
  }
`;
