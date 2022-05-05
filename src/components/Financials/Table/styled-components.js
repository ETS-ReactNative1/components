import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Row = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e9eb;

  ${({ last }) =>
    last && {
      borderBottom: 'none',
      borderTop: '0.5px solid #000'
    }}
`;

export const Label = styled.div`
  height: 100%;
  font-family: GloberAdjusted;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #000000;
  display: flex;
  align-items: center;

  ${({ last }) =>
    last && {
      fontWeight: 700
    }}
`;

export const Value = styled.div`
  height: 100%;
  font-family: GloberAdjusted;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #000000;
  display: flex;
  align-items: center;
`;
