import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div`
  font-family: "GloberAdjusted";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.6000000238418579px;
  margin-bottom: 19px;

  ${({ isMobile }) =>
    isMobile && {
      fontSize: 24,
      lineHeight: "24px",
    }}
`;
