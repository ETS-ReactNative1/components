import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: ${({ mb }) => (mb ? mb : '20px')};
`;

export const Title = styled.div`
  font-family: GloberAdjusted;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  color: ${({ titleColor }) => titleColor};
  margin-bottom: 8px;
`;
