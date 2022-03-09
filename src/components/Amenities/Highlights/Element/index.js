import React from "react";
import PropTypes from "prop-types";
import { Container, Title, IconMock } from "./styled-components";

const Element = ({ title, icon }) => {
  console.log("title", title);
  return (
    <Container>
      <IconMock />
      <Title>{title}</Title>
    </Container>
  );
};

Element.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export { Element };
