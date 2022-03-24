import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  border-top: 1px solid #e6e9eb;

  ${({ isLast }) =>
    isLast && {
      borderBottom: '1px solid #e6e9eb'
    }}

  ${({ isMobile }) =>
    isMobile && {
      height: 'auto'
    }}
`;

export const Cell = styled.div`
  display: flex;
  padding: 16px 12px;
  border-radius: 8px;
  height: 28px;
  align-items: center;
  &:hover {
    background-color: #f2f4f6;
  }
  cursor: pointer;

  ${({ isMobile }) =>
    isMobile && {
      height: 'auto',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }}
`;

export const AgentInfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${({ isMobile }) =>
    isMobile && {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }}
`;

export const AvatarImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const AgentName = styled.div`
  font-family: GloberAdjusted;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  width: 15%;

  ${({ isMobile }) =>
    isMobile && {
      width: 'auto',
      marginBottom: 4
    }}
`;
