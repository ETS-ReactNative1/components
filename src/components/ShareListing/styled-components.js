import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Item = styled.div`
  margin-right: 8px;
  &:last-child {
    margin-right: 0px;
  }
`;
