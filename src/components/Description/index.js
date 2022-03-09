import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Title, Text, Button } from "./styled-components";
import { useEventListener } from "../../hooks/useEventListener";

const Description = ({ title, text, ...rest }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const checkContent = () => {
    const isContentHidden =
      Array.from(document.querySelectorAll("#trucated-text")).length > 1;
    setShowButton(isContentHidden);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkContent();
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  useEventListener("resize", checkContent);

  return (
    <Container {...rest}>
      <Title>{title}</Title>

      <Text
        lines={expanded ? false : 3}
        expanded={expanded}
        fade={showButton && !expanded}
        more={""}
        less={""}
        onClick={() => setExpanded((value) => !value)}
        truncatedEndingComponent={<span id="trucated-text">... </span>}
      >
        {text}
      </Text>

      {showButton && (
        <Button onClick={() => setExpanded((value) => !value)}>
          {expanded ? "Less" : "Read More"}
        </Button>
      )}
    </Container>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { Description };
