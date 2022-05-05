import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  padding: 20px 0;
  display: flex;
  align-items: center;

  ${({ isMobile }) =>
    isMobile && {
      padding: '24px 0'
    }}
`;

export const PlaceHolder = styled.div`
  height: 32px;
  border-radius: 8px;
  width: 100%;
  background-color: #fafbfb;
  border: 1px solid #e6e9eb;
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  font-family: GloberAdjusted;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #606060;
  width: ${({ total }) => `calc(100% / ${total})`};
  cursor: pointer;

  ${({ isActive }) =>
    isActive && {
      border: `1px solid #2A7A7B`,
      borderRadius: 8,
      height: '100%',
      color: '#2A7A7B'
    }}
`;
