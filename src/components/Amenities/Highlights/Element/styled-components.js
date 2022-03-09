import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  ${({ isMobile }) =>
    isMobile && {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: 52,
    }}
`;

export const IconContainer = styled.div`
  height: 24px;
  width: 24px;
  margin-right: 12px;

  ${({ isMobile }) =>
    isMobile && {
      marginRight: 0,
    }}
`;

export const Title = styled.div`
  font-family: "GloberAdjusted";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  color: #606060;

  width: 50%;

  ${({ isMobile }) =>
    isMobile && {
      fontSize: "13px",
      lineHeight: "18px",
      width: "50%",
      textAlign: "center",
      marginTop: 12,
    }};
`;
