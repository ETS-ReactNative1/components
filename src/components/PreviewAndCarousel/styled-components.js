import styled from 'styled-components';
import { ImageBox } from '../BoxImage';
import { Button } from '@material-ui/core';

export const Wrapper = styled.div`
  position: relative;
  min-height: 364px;

  & .single-image {
    position: absolute;
  }

  & .mobile-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    & img {
      object-fit: fill;
    }
    min-height: 364px;
  }

  & .main-mobile-img {
    grid-area: 1 / 1 / 3 / 4;
    cursor: pointer;
  }

  & .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    & img {
      object-fit: fill;
    }
    min-height: 364px;
  }

  & .main-img {
    grid-area: 1 / 1 / 3 / 3;
    cursor: pointer;
    outline: #fff solid 3px;
    & div {
      border-radius: 8px;
    }
  }
  & .img-1 {
    grid-area: 1 / 3 / 2 / 4;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
  }
  & .img-2 {
    grid-area: 2 / 3 / 3 / 4;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
  }
`;

export const IconButton = styled(Button)`
  position: absolute;
  cursor: pointer;
  bottom: 8px;
  right: 18.2px;
  padding: 4px 12px;
  height: 32px;
  width: 188px;
  background-color: #ffffff;
  color: #2a7a7b;
  border-radius: 8px;
  border: 1px solid #9dd3d1;
  font-family: 'GloberAdjusted';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  line-height: 16px;

  &:hover {
    background-color: #ffffff;
  }

  &.MuiButton-root {
    text-transform: capitalize;
  }
`;

export const MobileContainer = styled.div`
  height: 198px;
  width: 100%;
  position: relative;

  & #button {
    position: absolute;
    width: 83px;
    height: 32px;
    background-color: #fff;
    bottom: 8.22px;
    right: 18.2px;
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & #icon {
      margin-right: 10px;
    }
    & #label {
      font-family: 'Neutraface Display';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
    }
  }
`;

export const MainImage = styled(ImageBox)`
  min-height: 364px;
  width: 100%;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
