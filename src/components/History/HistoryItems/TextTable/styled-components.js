import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ItemContainer = styled.div`
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  min-height: 28px;

  ${({ isMobile }) =>
    isMobile && {
      marginBottom: 12,
      minHeight: 48,
      height: 48
    }}
`;

export const Divider = styled.div`
  height: 1px;
  margin: 20px 0px;
  background: #e6e9eb;
  width: 100%;

  ${({ isMobile }) =>
    isMobile && {
      margin: '16px 0'
    }}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`;

export const RowWrapper = styled.div`
  &:hover {
    .activity-title,
    .activity-pct-change,
    .listing-text-container {
      font-weight: 700;
    }

    .listing-text,
    .activity-date,
    .activity-price {
      font-weight: 900;
    }
  }
`;
