import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Title = styled.div`
  font-family: "GloberAdjusted";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  color: #3b5568;
  margin-bottom: 19px;

  ${({ isMobile }) =>
    isMobile && {
      fontSize: 16,
      lineHeight: "21px",
    }}
`;
