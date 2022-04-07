import styled from 'styled-components';

export const ListingChangeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50%;
  min-height: 28px;

  ${({ isMobile }) =>
    isMobile && {
      width: '100%'
    }}
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  height: 100%;
  margin-right: 8px;
`;

export const Dot = styled.div`
  color: #929aa2;
  font-family: 'GloberAdjusted';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
`;

export const LinkContainer = styled.a`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
`;

export const NotVerifiedLabel = styled.div`
  font-family: 'GloberAdjusted';
  font-size: 12px;
  letter-spacing: 0.5px;
  border: 1px solid #e3e6ed;
  color: #606060;
  border-radius: 2px;
  display: inline;
  padding: 2px 10px;
`;

export const PriceAndChangeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  ${({ isMobile }) =>
    isMobile && {
      flexDirection: 'column',
      alignItems: 'flex-end'
    }}
`;

export const PriceText = styled.div`
  color: #000000;
  font-family: 'GloberAdjusted';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
  margin-right: 8px;
  cursor: pointer;

  ${({ isMobile }) =>
    isMobile && {
      marginRight: 0,
      marginBottom: 4
    }}
`;

export const Title = styled.div`
  color: #000000;
  font-family: 'GloberAdjusted';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
`;
