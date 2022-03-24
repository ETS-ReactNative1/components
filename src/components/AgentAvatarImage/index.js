import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import { BoxSpace, Placeholder, Image, FakeImage, Container, Initials } from './styled-components';

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

const AgentAvatarImage = ({
  image,
  withFallback,
  viewConfig,
  children,
  containedImage,
  bgcolor,
  withGradient,
  imageGradient,
  agentName,
  ...restProps
}) => {
  const [ref, inView] = useInView(viewConfig);
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const initials = getInitials(agentName);
  let imageSRC = image;
  let altText = '';

  return (
    <Container position="relative" bgcolor={bgcolor || 'common.black'} {...restProps}>
      {image && (
        <FakeImage
          src={inView ? imageSRC : ''}
          ref={ref}
          onLoad={onLoad}
          onError={onLoad}
          alt={altText}
        />
      )}
      <Placeholder
        backgroundimage={
          withFallback
            ? `${!withGradient ? '' : `${imageGradient}, `}url(${
                process.env.IMAGE_PLACEHOLDER_URL
              })`
            : 'none'
        }
        containedImage={containedImage}
      />
      <Image
        backgroundimage={
          inView ? `${!withGradient ? '' : `${imageGradient}, `}url(${imageSRC})` : 'none'
        }
        loaded={isLoaded.toString()}
        containedImage={containedImage}
      />
      <BoxSpace>
        <Initials loaded={isLoaded.toString()}>{initials}</Initials>
      </BoxSpace>
    </Container>
  );
};

AgentAvatarImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  withFallback: PropTypes.bool,
  bgcolor: PropTypes.string,
  viewConfig: PropTypes.object,
  containedImage: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  withGradient: PropTypes.bool,
  imageGradient: PropTypes.string
};

AgentAvatarImage.defaultProps = {
  withFallback: true,
  viewConfig: {
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50%'
  },
  withGradient: false,
  imageGradient: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
};

const Memo = React.memo(AgentAvatarImage);

export { Memo as AgentAvatarImage };
export * from './styled-components';
