import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container, VerticalDivider } from "./styled-component";
import { Element } from "../Element";

const ElementsRow = ({ elements = [] }) => {
  const [firstElement = null, secondElement = null, thirdElement = null] =
    elements;

  return (
    <Container>
      {!!firstElement && <Element {...firstElement} />}
      {!!secondElement && (
        <Fragment>
          <VerticalDivider />
          <Element {...secondElement} />
        </Fragment>
      )}
      {!!thirdElement && (
        <Fragment>
          <VerticalDivider />
          <Element {...thirdElement} />
        </Fragment>
      )}
    </Container>
  );
};

ElementsRow.propTypes = {
  elements: PropTypes.array,
};

export default ElementsRow;
