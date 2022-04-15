import React, { useMemo } from 'react';
import { ImageBox } from '../../BoxImage';
import { Container, ExploreLabel, Span, Icon } from './styled-components';
import PropTypes from 'prop-types';

const PreviewImage = ({ item, onClick, ...rest }) => {
  const { thumbnail_url, media_type } = item;

  const showExploreLabel = useMemo(() => media_type === 'tour', [media_type]);

  return (
    <Container>
      <ImageBox bg="transparent" image={thumbnail_url} {...rest} />

      {showExploreLabel && (
        <ExploreLabel onClick={onClick}>
          <Span>Explore </Span>
          <Icon />
        </ExploreLabel>
      )}
    </Container>
  );
};

PreviewImage.propTypes = {
  item: PropTypes.shape({
    thumbnail_url: PropTypes.string,
    media_type: PropTypes.oneOf(['tour', 'video', 'image'])
  }),
  onClick: PropTypes.func
};

export { PreviewImage };
