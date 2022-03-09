import React from "react";
import Image from "../Image";
import SingleImage from "./SingleImage";
import { Container } from "./styled-components";

const Preview = ({ images = [] }) => {
  if (images.length < 3) {
    if (images.length) {
      const [firstImage] = images;
      return <SingleImage image={firstImage} />;
    }

    return null;
  }
  const [firstImage, secondImage, thirdImage] = images;
  return (
    <Container>
      <Image image={firstImage} className="main-image" />
      <Image image={secondImage} className="second-image" />
      <Image image={thirdImage} className="third-image" />
    </Container>
  );
};

export default Preview;
