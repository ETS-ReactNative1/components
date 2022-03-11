import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 8px;
  padding-top: 2px;
  width: 18px;
  display: flex;
  justify-content: center;
`;

export const Dot = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  z-index: 2;

  ${({ background, border }) => ({
    background,
    border: `2px solid ${border}`,
  })};
`;

export const LineDots = styled.div`
  position: absolute;
  height: 15px;
  width: 0px;
  z-index: 1;
  border: 1px dashed #e6e9eb;

  ${({ height }) => ({
    height,
  })};
`;
