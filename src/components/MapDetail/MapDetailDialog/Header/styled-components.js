import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 72px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-family: GloberAdjusted;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  color: #000000;
`;

export const Subtitle = styled.div`
  font-family: GloberAdjusted;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  color: #606060;
  margin-top: 4px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 24px;
`;
