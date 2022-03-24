import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 36px;
  flex: 1;
  ${({ isMobile }) =>
    isMobile && {
      marginTop: 12
    }}
`;
