import PropTypes from 'prop-types';

export const ADMINISTRATIVE_DISTRICT_PLACE_TYPE = 'administrative_district';
export const NEIGHBORHOOD_GROUP_PLACE_TYPE = 'neighborhood_group';
export const NEIGHBORHOOD_PLACE_TYPE = 'neighborhood';

const GeographyPlacetType = PropTypes.oneOf([
  ADMINISTRATIVE_DISTRICT_PLACE_TYPE,
  NEIGHBORHOOD_GROUP_PLACE_TYPE,
  NEIGHBORHOOD_PLACE_TYPE,
]);

function lazyFunction(f) {
  return function () {
    return f.apply(this, arguments);
  };
}

const LazyGeographyType = lazyFunction(function () {
  return GeographyType;
});

export const GeographyType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(LazyGeographyType),
  geography_type: GeographyPlacetType.isRequired,
  name: PropTypes.string.isRequired,
  selectable: PropTypes.bool.isRequired,
  sort_order: PropTypes.number.isRequired,
});
