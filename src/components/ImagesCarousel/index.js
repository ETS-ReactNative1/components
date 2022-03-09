import React, { useState } from "react";
import Preview from "./Preview";
import { Container } from "./styled-components";

const ImagesCarousel = ({ images = [] }) => {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <Preview images={images.slice(0, 3)} />
      </Container>
    </React.Fragment>
  );
};

export default ImagesCarousel;
