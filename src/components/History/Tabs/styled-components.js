import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border: 1px solid #e6e9eb;
  border-radius: 8px;
  height: 32px;
  max-height: 32px;
  width: max-content;
  margin: 0 auto;

  margin-bottom: 23px;

  ${({ isMobile }) =>
    isMobile && {
      width: '100%'
    }}
`;

export const TabContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
`;

export const TabItem = styled.div`
  border: 1px solid #2a7a7b;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2a7a7b;

  font-family: 'GloberAdjusted';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  background-color: #fff;
  cursor: pointer;
  ${({ active }) => (active ? { opacity: 1 } : { opacity: 0 })}
`;

export const PlaceholderTabContainer = styled.div`
  display: absolute;
  display: flex;
  height: 100%;
`;

export const PlaceHolderTabItem = styled.div`
  color: #606060;
  font-family: 'GloberAdjusted';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0px 14px;
`;
