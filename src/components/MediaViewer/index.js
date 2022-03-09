import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Dialog } from "@material-ui/core";

const MediaViewer = ({
  open,
  onClose,
  media,
  linkImages,
  banner: Banner,
  ...restSliderProps
}) => {
  return (
    <Dialog
      id={DIALOG_ID}
      open={open}
      onEnter={focusActiveSlide}
      onClose={onClose}
      fullScreen
    >
      <Container>
        <CloseButton disableRipple onClick={onClose}>
          <CloseIcon fontSize="large" />
        </CloseButton>
        <Slider
          slidesToShow={1}
          arrowColor="common.white"
          afterChange={focusActiveSlide}
          lazyLoad="null"
          infinite
          {...restSliderProps}
        >
          {media.map((mediaItem, index) => (
            <BannerContainer key={index} linkImages={linkImages}>
              <Banner
                playerProps={playerProps}
                onClick={clickFunction(mediaItem.contentURL, linkImages)}
                {...mediaItem}
              />
            </BannerContainer>
          ))}
        </Slider>
      </Container>
    </Dialog>
  );
};

MediaViewer.propTypes = {
  open: PropTypes.bool.isRequired,
  linkImages: PropTypes.bool,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      contentURL: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  banner: PropTypes.elementType,
  onClose: PropTypes.func,
};

export default MediaViewer;
