import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  height: 364px;
  width: 100%;

  & img {
    object-fit: fill;
  }

  & .main-image {
    grid-area: 1 / 1 / 3 / 3;
    cursor: pointer;
  }
  & .second-image {
    grid-area: 1 / 3 / 2 / 4;
    cursor: pointer;
    border-radius: 8px;
  }
  & .third-image {
    grid-area: 2 / 3 / 3 / 4;
    cursor: pointer;
    border-radius: 8px;
  }
`;
