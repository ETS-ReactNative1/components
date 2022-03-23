import { Box } from "@material-ui/core";
import styled, { css } from "styled-components";

const BoxPositionStyles = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BoxSpace = styled(Box)`
  ${BoxPositionStyles}
`;

export const BackgroundBox = styled(BoxSpace)`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: ${({ containedImage }) =>
    containedImage ? "contain" : "cover"};
  background-image: ${({ backgroundimage }) => backgroundimage};
`;

export const Placeholder = styled(BackgroundBox)``;

export const Image = styled(BackgroundBox)`
  opacity: ${({ loaded }) => (loaded === "true" ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const FakeImage = styled.img`
  ${BoxPositionStyles};
  z-index: -1;
`;
