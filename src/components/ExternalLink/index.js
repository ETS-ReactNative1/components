import React from "react";
import { Container, Link, ExternalLinkIcon } from "./styled-components";

const ExternalLink = ({ text, url }) => {
  return (
    <Container href={url} target="_blank">
      <Link>{text}</Link>
      <ExternalLinkIcon />
    </Container>
  );
};

export { ExternalLink };
