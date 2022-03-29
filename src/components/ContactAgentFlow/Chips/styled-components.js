import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const Chip = styled.div`
  height: 32px;
  border: 1px solid #e6e9eb;
  background-color: #fff;
  padding: 7px 14px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'GloberAdjusted';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: #606060;

  cursor: pointer;

  margin-right: 8px;
  margin-bottom: 8px;
  &:last-child {
    margin-right: 0;
  }

  ${({ active }) =>
    active && {
      border: '1px solid #9DD3D1',
      background: '#D7F6F2',
      color: '#37D2BE'
    }}
`;
