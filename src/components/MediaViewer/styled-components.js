import styled from "styled-components";
import { Grid, IconButton as MuiIconButton } from "@material-ui/core";

export const Container = styled(Grid)`
  position: relative;
  height: 100%;
  background-color: #000;
`;

export const CloseButton = styled(MuiIconButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  color: #fff;
  z-index: 1;
`;

export const Slider = styled(SliderCommon)`
  ${PrevIcon} {
    left: 7.2%;
  }
  ${NextIcon} {
    right: 7.2%;
  }
`;

export const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex !important;
  align-items: center;
  justify-content: center;
  > div {
    width: 100%;
    height: 100%;
    max-width: 71.4%;
    max-height: 85%;
  }
  > div > div {
    ${(props) => props.linkImages && "cursor: zoom-in;"}
    background-size: contain;
  }
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      "> div": {
        maxWidth: "100%",
      },
    },
  })}
`;
