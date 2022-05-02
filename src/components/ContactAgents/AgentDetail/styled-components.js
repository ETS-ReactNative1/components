import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 10%;
  margin-bottom: 4px;
  width: calc(100% / 3);

  ${({ isMobile }) =>
    isMobile && {
      width: '100%'
    }}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  & svg {
    transform: translateY(-1.5px);
  }
`;

export const Text = styled.div`
  font-family: GloberAdjusted;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;

  color: #000;
  ${({ isMobile }) =>
    isMobile && {
      color: '#606060'
    }}
`;
