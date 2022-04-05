import styled from 'styled-components';
import Panel from '../Panel';

export const Container = styled.div`
  margin-top: 36px;
  flex: 1;
  ${({ isMobile }) =>
    isMobile && {
      marginTop: 12
    }}
`;
