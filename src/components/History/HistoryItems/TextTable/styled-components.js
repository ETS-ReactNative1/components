import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ListingTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;

  font-family: GloberAdjusted;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  color: #000000;

  ${({ isMobile }) =>
    isMobile && {
      paddingLeft: 17,
      width: 52,
      minWidth: 52
    }}

  ${({ hovered }) =>
    hovered && {
      fontWeight: 700
    }}
`;

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

export const Text = styled.a`
  color: #2a7a7b;
  font-family: 'GloberAdjusted';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
  flex: 1;
  text-decoration: none;
  cursor: pointer;
  ${({ hovered }) =>
    hovered && {
      fontWeight: 800
    }}
`;

export const DateText = styled.div`
  color: #000000;
  font-family: 'GloberAdjusted';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;

  ${({ hovered }) =>
    hovered && {
      fontWeight: 800
    }}
`;

export const ItemContainer = styled.div`
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  min-height: 28px;

  ${({ isMobile }) =>
    isMobile && {
      marginBottom: 12,
      minHeight: 48,
      height: 48
    }}
`;

export const Divider = styled.div`
  height: 1px;
  margin: 20px 0px;
  background: #e6e9eb;
  width: 100%;

  ${({ isMobile }) =>
    isMobile && {
      margin: '16px 0'
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

export const PriceAndChangeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  ${({ isMobile }) =>
    isMobile && {
      flexDirection: 'column',
      alignItems: 'flex-end'
    }}
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  height: 100%;
  margin-right: 8px;
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

  ${({ hovered }) =>
    hovered && {
      fontWeight: 700
    }}
`;

export const LinkContainer = styled.a`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
`;

export const Link = styled.span`
  font-family: 'GloberAdjusted';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  color: #2a7a7b;
  margin-right: 4px;
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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
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

export const ListedWithMobileContainer = styled.div`
  padding-left: 100px;
  font-family: GloberAdjusted;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  color: #000000;
  margin-bottom: 14px;
  ${({ hovered }) =>
    hovered && {
      fontWeight: 700
    }}
`;
