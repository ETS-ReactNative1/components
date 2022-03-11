import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ListingTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  padding-right: 15px;
  ${({ isMobile }) =>
    isMobile && {
      paddingLeft: 17,
      width: 52,
    }}
`;

export const ListingChangeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50%;
  min-height: 28px;
  padding-left: 15px;

  ${({ isMobile }) =>
    isMobile && {
      width: "100%",
    }}
`;

export const Text = styled.a`
  color: #2a7a7b;
  font-family: "GloberAdjusted";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
  flex: 1;
  text-decoration: none;
  cursor: pointer;
`;

export const DateText = styled.div`
  color: #000000;
  font-family: "GloberAdjusted";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
`;

export const ItemContainer = styled.div`
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  height: 28px;
  min-height: 28px;

  ${({ isMobile }) =>
    isMobile && {
      marginBottom: 12,
      minHeight: 48,
      height: 48,
    }}
`;

export const Divider = styled.div`
  height: 1px;
  margin: 20px 0px;
  background: #e6e9eb;
  width: 100%;

  ${({ isMobile }) =>
    isMobile && {
      margin: "16px 0",
    }}
`;

export const PriceText = styled.div`
  color: #000000;
  font-family: "GloberAdjusted";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
  margin-right: 8px;

  ${({ isMobile }) =>
    isMobile && {
      marginRight: 0,
      marginBottom: 4,
    }}
`;

export const PriceAndChangeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  ${({ isMobile }) =>
    isMobile && {
      flexDirection: "column",
      alignItems: "flex-end",
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
  font-family: "GloberAdjusted";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
`;

export const LinkContainer = styled.a`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
`;

export const Link = styled.span`
  font-family: "GloberAdjusted";
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
  font-family: "GloberAdjusted";
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
