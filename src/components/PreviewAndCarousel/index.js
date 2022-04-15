/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ImageIcon } from './icons';
import { Wrapper, IconButton } from './styled-components';
import PropTypes from 'prop-types';
import { PreviewImage } from './PreviewImage';
import { PropertyInfo } from './PropertyInfo';
import { getCarouselItems } from './helpers';

const PreviewAndCarousel = ({
  listing = {},
  isMobile = false,
  saleOrRental,
  sponsored = false,
  statusCode
}) => {
  const { multimedia_types: multimediaTypes } = listing;
  const items = getCarouselItems(listing);

  const [mainImage = null, img1 = null, img2 = null] = items;
  const [isMediaViewerOpen, setIsMediaViewerOpen] = useState(false);
  const previewImagesCount = [mainImage, img1, img2].filter((img) => img !== null).length;

  const [carouselImages, setCarouselImages] = useState([...items]);
  const virtualTourIndex = useMemo(() => items.findIndex((item) => item.media_type === 'tour'), [
    items
  ]);

  const focusOnImage = useCallback(
    (index) => {
      const result = [];

      let currentIndex = index;
      // eslint-disable-next-line guard-for-in
      for (const _ in items) {
        result.push(items[currentIndex]);
        currentIndex++;
        if (currentIndex === items.length) {
          currentIndex = 0;
        }
      }
      setCarouselImages(result);
      setIsMediaViewerOpen(true);
    },
    [items]
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      {isMobile || previewImagesCount < 3 ? (
        <React.Fragment>
          <div className="mobile-grid ">
            <div onClick={() => focusOnImage(0)} className="main-mobile-img">
              <PreviewImage
                item={mainImage}
                onClick={() => focusOnImage(0)}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="grid">
            <div onClick={() => focusOnImage(0)} className="main-img">
              <PreviewImage item={mainImage} width="100%" height="100%" className="main-img" />
            </div>
            <div onClick={() => focusOnImage(1)} className="img-1">
              <PreviewImage item={img1} width="100%" height="100%" />
            </div>
            <div onClick={() => focusOnImage(2)} className="img-2">
              <PreviewImage item={img2} width="100%" height="100%" />
            </div>
          </div>
        </React.Fragment>
      )}

      {
        <PropertyInfo
          virtualTourIndex={virtualTourIndex}
          statusCode={statusCode}
          sponsored={sponsored}
          saleOrRental={saleOrRental}
          hasVirtualTour={multimediaTypes.includes('tour')}
          hasFloorPlan={multimediaTypes.includes('floor_plan')}
        />
      }

      {items.length > 1 && (
        <IconButton startIcon={<ImageIcon />} onClick={() => focusOnImage(0)}>
          <span>See All Photos</span>
        </IconButton>
      )}
    </Wrapper>
  );
};

PreviewAndCarousel.propTypes = {
  listing: PropTypes.object,
  children: PropTypes.node,
  sponsored: PropTypes.bool,
  isMobile: PropTypes.bool,
  saleOrRental: PropTypes.oneOf(['R', 'S']),
  statusCode: PropTypes.number
};

export { PreviewAndCarousel };
