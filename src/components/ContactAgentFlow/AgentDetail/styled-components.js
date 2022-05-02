import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 10%;
  width: calc(100% / 3);

  &:last-child {
    margin-bottom: 0;
  }

  ${({ isMobile }) =>
    isMobile && {
      width: '100%'
    }}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 8px;

  @media (max-width: 600px) {
    margin-right: 4px;
  }
  & svg {
    transform: translateY(-1.5px);
  }
`;

export const Text = styled.div`
  font-family: GloberAdjusted;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  color: #000;
  ${({ isMobile }) =>
    isMobile && {
      color: '#606060'
    }}
`;
