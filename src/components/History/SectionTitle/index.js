import React, { useMemo } from 'react';
import {
  Container,
  Header,
  Title,
  ChevronRight,
  StatusContainer,
  StatusLabel,
  OwnerLabel
} from './styled-components';

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
        {!!owner && <OwnerLabel>{`• Owned by ${owner}`}</OwnerLabel>}
      </StatusContainer>
    </Container>
  );
};

export default SectionTitle;
