import styled from 'styled-components';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ExploreLabel = styled.div`
  position: absolute;
  top: 43%;
  left: 35%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  cursor: pointer;
`;

export const Span = styled.span`
  font-family: 'GloberAdjusted';
  font-size: 18;
  color: #fff;
  margin: 0;
`;

export const Icon = styled(ZoomOutMapIcon)`
  color: #fff;
  margin-left: 8px;
`;
