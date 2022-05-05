import React from 'react';
import { Container, Row, Label, Value } from './styled-components';

const Table = ({ rows }) => {
  const visibleRows = rows.filter((row) => !!row);
  const total = visibleRows.length;
  if (visibleRows.length === 0) {
    return null;
  }

  return (
    <Container>
      {visibleRows.map((row, index) => {
        const isLast = index + 1 === total;
        return (
          <Row key={index} last={isLast}>
            <Label last={isLast}>{row.label}</Label>
            <Value>{row.value}</Value>
          </Row>
        );
      })}
    </Container>
  );
};

export default Table;
