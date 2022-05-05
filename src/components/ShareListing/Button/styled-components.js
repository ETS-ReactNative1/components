import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #9dd3d1;
  color: #2a7a7b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 27.5px;
  border-radius: 8px;
  height: 32px;

  & span {
    font-family: 'GloberAdjusted';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    margin-left: 8px;
  }
`;
