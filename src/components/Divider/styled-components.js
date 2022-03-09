import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0px;
  height: 1px;
  width: 100%;
  background-color: #e6e9eb;
  ${({ isMobile }) =>
    isMobile && {
      margin: "12px 0",
    }}
`;
