import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Text, Button, PreviewText } from './styled-components';
import { useEventListener } from '../../hooks/useEventListener';

const Description = ({ title, text, isMobile, ...rest }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [previewText, setPreviewText] = useState('');

  const checkContent = () => {
    const isContentHidden = Array.from(document.querySelectorAll('.truncated-text')).length > 1;
    setShowButton(isContentHidden || expanded);
    const preview = document.querySelector('#description-container').textContent;
    setPreviewText(text.substring(0, preview.length));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkContent();
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  useEventListener('resize', checkContent);
  const common = { isMobile };
  return (
    <React.Fragment>
      <Container {...rest}>
        <Title {...common}>{title}</Title>

        {!expanded && (
          <PreviewText fade={showButton && !expanded} id="preview-text">
            {previewText}
          </PreviewText>
        )}
        <div id="description-container">
          <Text
            lines={expanded ? 0 : 3}
            expanded={expanded}
            more={''}
            less={''}
            onClick={() => setExpanded((value) => !value)}
            truncatedEndingComponent={<span className="truncated-text">... </span>}
            keepNewLines
          >
            {text}
          </Text>
        </div>

        {showButton && (
          <Button {...common} onClick={() => setExpanded((value) => !value)}>
            {expanded ? 'Less' : 'Read More'}
          </Button>
        )}
      </Container>
    </React.Fragment>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export { Description };
