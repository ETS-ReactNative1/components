import styled from "styled-components";

export const Container = styled.div`
  min-width: 64px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  ${({ isMobile }) =>
    isMobile && {
      justifyContent: "flex-end",
    }};
`;

export const Text = styled.div`
  margin-left: 4px;
  font-family: "GloberAdjusted";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  ${({ color }) => ({
    color,
  })}
`;
