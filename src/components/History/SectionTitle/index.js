import React from "react";
import {
  Container,
  Header,
  Title,
  ChevronRight,
  StatusContainer,
  StatusLabel,
  OwnerLabel,
} from "./styled-components";

const SectionTitle = ({ title, status, owner }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ChevronRight />
      </Header>
      <StatusContainer>
        <StatusLabel>{status}</StatusLabel>
        &nbsp;
        <OwnerLabel>{`• ${owner}`}</OwnerLabel>
      </StatusContainer>
    </Container>
  );
};

export default SectionTitle;
