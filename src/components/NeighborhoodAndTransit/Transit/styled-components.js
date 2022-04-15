import styled from 'styled-components';

export const Container = styled.div`
  height: 431px;
  margin-top: 36px;

  ${({ isMobile }) =>
    isMobile && {
      marginTop: 0,
      height: 375
    }}
`;

export const Round = styled.div(({ color }) => ({
  width: 23,
  height: 23,
  borderRadius: '50%',
  backgroundColor: color,
  color: 'white',
  margin: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 13
}));

export const RectangleLabel = styled.div(({ color }) => ({
  borderRadius: 3,
  backgroundColor: color,
  color: 'white',
  margin: 4,
  padding: 8,
  fontFamily: 'GloberAdjusted',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 0.3
}));
