import React from "react";
import PropTypes from "prop-types";
import { Container, Title, ListItem } from "./styled-components";
import { Grid } from "@material-ui/core";

const List = ({ data, isMobile }) => {
  const { title, elements = [] } = data;
  return (
    <Container>
      <Title>{title}</Title>
      <Grid container>
        {elements.map((element, index) => (
          <Grid item xs={6} key={index}>
            <ListItem isMobile={isMobile}>{element.title}</ListItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.array.isRequired,
};

export default List;
