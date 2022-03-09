import React from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./styled-components";
import { Element } from "./Element";
import ElementsRow from "./ElementsRow";

function createRows(elements) {
  const rows = [];
  let row = [];
  for (let i = 0; i < elements.length; i++) {
    row.push(elements[i]);
    if ((i + 1) % 3 == 0) {
      rows.push(row);
      row = [];
    }
  }

  if (row.length) {
    rows.push(row);
  }

  return rows;
}

const Highlights = ({ data }) => {
  const { title, elements = [] } = data;
  const rows = createRows(elements);
  return (
    <Container>
      <Title>{title}</Title>
      {rows.map((row, index) => (
        <ElementsRow key={index} elements={row} />
      ))}
    </Container>
  );
};

Highlights.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Highlights;
