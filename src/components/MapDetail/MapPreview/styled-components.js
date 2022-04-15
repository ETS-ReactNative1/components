import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 431px;
  background-color: #eee;
  margin-top: 36px;
  position: relative;
`;

export const ViewModeButtonContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 10;
  bottom: 39px;
  width: 100%;
  justify-content: center;
`;

export const ViewModeButton = styled.div`
  height: 44px;
  width: 120px;
  border-radius: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: GloberAdjusted;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  cursor: pointer;

  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
`;

export const ZoomControls = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 33px;
  height: 56px;
`;
