import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${({ url }) => `${url}`});
  background-size: cover;
  background-repeat: no-repeat;
`;
