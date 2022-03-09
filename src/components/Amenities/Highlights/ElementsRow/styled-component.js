import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { Element } from "../Element";

export const Container = styled(Grid)`
  display: flex;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const VerticalDivider = styled.div`
  width: 1px;
  height: 44px;
  background-color: #e6e9eb;
  margin-right: 14.75px;
`;

export const GridContainer = styled(Grid)`
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const GridMobileItem = styled(Grid)`
  border-left: 1px solid #e6e9eb;
`;

export const GridItem = styled(Grid)`
  display: flex;
`;

export const CustomElement = styled(Element)`
  flex: 1;
`;
