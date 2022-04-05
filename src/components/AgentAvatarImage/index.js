import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import { Image, FakeImage, Container, Initials } from './styled-components';

function getInitial(word) {
  if (word.length > 0) {
    return word[0];
  }
  return '';
}

function getInitials(name) {
  const words = name.split(' ');

  if (words.length >= 2) {
    return `${getInitial(words[0])}${getInitial(words[1])}`;
  }
  return getInitial(name);
}

const AgentAvatarImage = ({ image, viewConfig, containedImage, agentName, ...restProps }) => {
  const [ref, inView] = useInView(viewConfig);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(() => !image);

  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const onError = useCallback(() => {
    setHasError(true);
  }, []);

  const initials = getInitials(agentName);
  let imageSRC = image;
  let altText = '';

  return (
    <Container position="relative" {...restProps}>
      {image && (
        <FakeImage
          src={inView ? imageSRC : ''}
          ref={ref}
          onLoad={onLoad}
          onError={onError}
          alt={altText}
        />
      )}

      <Image
        backgroundimage={inView ? `url(${imageSRC})` : 'none'}
        loaded={isLoaded.toString()}
        containedImage={containedImage}
      />
      <Initials loaded={hasError.toString()}>{initials}</Initials>
    </Container>
  );
};

AgentAvatarImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  viewConfig: PropTypes.object,
  containedImage: PropTypes.bool,
  agentName: PropTypes.string.isRequired
};

AgentAvatarImage.defaultProps = {
  viewConfig: {
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50%'
  }
};

const Memo = React.memo(AgentAvatarImage);

export { Memo as AgentAvatarImage };
export * from './styled-components';
