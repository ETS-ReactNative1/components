import styled from 'styled-components';

export const ListingTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;

  font-family: GloberAdjusted;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  color: #000000;

  ${({ isMobile }) =>
    isMobile && {
      paddingLeft: 17,
      width: 52,
      minWidth: 52
    }}
`;

export const Text = styled.a`
  color: #2a7a7b;
  font-family: 'GloberAdjusted';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
  flex: 1;
  text-decoration: none;
  cursor: pointer;
`;

export const DateText = styled.div`
  color: #000000;
  font-family: 'GloberAdjusted';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
`;
