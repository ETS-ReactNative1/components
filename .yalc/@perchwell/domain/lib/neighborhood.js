import PropTypes from 'prop-types';

export const NeighborhoodType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image_urls: PropTypes.arrayOf(PropTypes.string),
  geometry: PropTypes.shape({
    type: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
    ).isRequired,
  }),
  boundary_descriptions: PropTypes.arrayOf(PropTypes.string),
  nearby_neighborhoods: PropTypes.arrayOf(PropTypes.string),
  subways: PropTypes.arrayOf(PropTypes.string),
  detail_title: PropTypes.string,
  detail_description: PropTypes.string,
  detail_images: PropTypes.arrayOf(PropTypes.string),
});
