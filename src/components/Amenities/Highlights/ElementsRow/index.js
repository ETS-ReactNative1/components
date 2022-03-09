import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Container,
  VerticalDivider,
  GridContainer,
  GridItem,
  GridMobileItem,
  CustomElement,
} from "./styled-component";
import { Element } from "../Element";
import { Grid } from "@material-ui/core";

const ElementsRow = ({ elements = [], isMobile }) => {
  const [firstElement = null, secondElement = null, thirdElement = null] =
    elements;

  const common = { isMobile };

  if (isMobile) {
    return (
      <GridContainer container>
        {firstElement && (
          <Grid item xs={4}>
            <Element {...firstElement} {...common} />
          </Grid>
        )}

        {secondElement && (
          <GridMobileItem item xs={4}>
            <Element {...secondElement} {...common} />
          </GridMobileItem>
        )}
        {thirdElement && (
          <GridMobileItem item xs={4}>
            <Element {...thirdElement} {...common} />
          </GridMobileItem>
        )}
      </GridContainer>
    );
  }

  return (
    <Container container {...common}>
      {firstElement && (
        <Grid item xs={4}>
          <Element {...firstElement} {...common} />
        </Grid>
      )}

      {secondElement && (
        <GridItem item xs={4}>
          <VerticalDivider {...common} />
          <CustomElement {...secondElement} {...common} />
        </GridItem>
      )}
      {thirdElement && (
        <GridItem item xs={4}>
          <VerticalDivider {...common} />
          <CustomElement {...thirdElement} {...common} />
        </GridItem>
      )}
    </Container>
  );
};

ElementsRow.propTypes = {
  elements: PropTypes.array,
};

export default ElementsRow;
