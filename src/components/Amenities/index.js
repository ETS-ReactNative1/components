import React from "react";
import { Container, Title } from "./styled-components";
import PropTypes from "prop-types";
import Highlights from "./Highlights";
import List from "./List";

const Amenities = (props) => {
  const { data } = props;
  if (!data) {
    return null;
  }
  const { subsections = [] } = data;

  const highlights = subsections.find(
    (subsection) => subsection.title === "Highlights"
  );

  const unitAmenities = subsections.find(
    (subsection) => subsection.title === "Unit Amenities"
  );
  const buildingAmenities = subsections.find(
    (subsection) => subsection.title === "Building Amenities"
  );
  return (
    <Container>
      <Title>Amenities</Title>
      {highlights && <Highlights data={highlights} />}
      {unitAmenities && <List data={unitAmenities} />}
      {buildingAmenities && <List data={buildingAmenities} />}
    </Container>
  );
};

Amenities.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Amenities;
