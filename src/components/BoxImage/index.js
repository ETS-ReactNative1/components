import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { useInView } from "react-intersection-observer";

import { BoxSpace, Placeholder, Image, FakeImage } from "./styled-components";

const ImageBox = ({
  image,
  withFallback,
  viewConfig,
  children,
  containedImage,
  bgcolor,
  withGradient,
  imageGradient,
  ...restProps
}) => {
  const [ref, inView] = useInView(viewConfig);
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  let imageSRC = image;
  let altText = "";
  if (typeof image === "object") {
    imageSRC = image?.content_url;
    altText = image?.alt_text;
  }

  return (
    <Box position="relative" bgcolor={bgcolor || "common.black"} {...restProps}>
      {image && (
        <FakeImage
          src={inView ? imageSRC : ""}
          ref={ref}
          onLoad={onLoad}
          alt={altText}
        />
      )}
      <Placeholder
        backgroundimage={
          withFallback
            ? `${!withGradient ? "" : `${imageGradient}, `}url(${
                process.env.IMAGE_PLACEHOLDER_URL
              })`
            : "none"
        }
        containedImage={containedImage}
      />
      <Image
        backgroundimage={
          inView
            ? `${!withGradient ? "" : `${imageGradient}, `}url(${imageSRC})`
            : "none"
        }
        loaded={isLoaded.toString()}
        containedImage={containedImage}
      />
      <BoxSpace>{children}</BoxSpace>
    </Box>
  );
};

ImageBox.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  withFallback: PropTypes.bool,
  bgcolor: PropTypes.string,
  viewConfig: PropTypes.object,
  containedImage: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  withGradient: PropTypes.bool,
  imageGradient: PropTypes.string,
};

ImageBox.defaultProps = {
  withFallback: true,
  viewConfig: {
    threshold: 0,
    triggerOnce: true,
    rootMargin: "50%",
  },
  withGradient: false,
  imageGradient:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
};

const Memo = React.memo(ImageBox);

export { Memo as ImageBox };
export * from "./styled-components";
