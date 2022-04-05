import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';

const BoxPositionStyles = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Container = styled(Box)``;

export const BoxSpace = styled(Box)`
  ${BoxPositionStyles}
`;

export const Initials = styled.span`
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  transform: translate(1%, 1%);

  background-color: #000;
  height: 98%;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  color: white;
  text-align: center;
  font-weight: bold;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ loaded }) => (loaded === 'true' ? 1 : 0)};
`;

export const BackgroundBox = styled(BoxSpace)`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: ${({ containedImage }) => (containedImage ? 'contain' : 'cover')};
  background-image: ${({ backgroundimage }) => backgroundimage};
  z-index: 2;
`;

export const Placeholder = styled(BackgroundBox)`
  border-radius: 50%;
  z-index: 2;
`;

export const Image = styled(BackgroundBox)`
  opacity: ${({ loaded }) => (loaded === 'true' ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  border-radius: 50%;
`;

export const FakeImage = styled.img`
  ${BoxPositionStyles};
  z-index: -1;
  border-radius: 50%;
  opacity: 0;
`;
