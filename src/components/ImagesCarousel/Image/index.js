import React from "react";
import { Container } from "./styled-components";

const Image = ({ image, ...rest }) => {
  const { thumbnail_url } = image;
  return <Container {...rest} url={thumbnail_url}></Container>;
};

export default Image;
