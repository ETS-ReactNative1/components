import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 16px;
  z-index: 10;
  pointer-events: none;
`;

export const Toggle = styled.div`
  height: 44px;
  background: #e6e9eb;
  border-radius: 22px;
  padding: 4px;
  display: flex;
  pointer-events: fill;
`;

export const ToggleItem = styled.div`
  font-family: GloberAdjusted;
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.20000000298023224px;

  border-radius: 18px;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 20px;
  cursor: pointer;

  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }

  ${({ active }) =>
    active && {
      backgroundColor: '#fff',
      boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.12)'
    }}
`;
