import PropTypes from 'prop-types';

export const ApartmentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  listing_details: PropTypes.shape({
    current_price: PropTypes.number.isRequired,
  }),
  location: PropTypes.shape({
    address: PropTypes.string.isRequired,
    address_with_unit: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
  }),
  media: PropTypes.shape({
    large_image_list: PropTypes.arrayOf(PropTypes.string),
    original_image_list: PropTypes.arrayOf(PropTypes.string),
    main_floor_plan: PropTypes.string,
    video_url: PropTypes.string,
  }),
  unit_details: PropTypes.shape({
    beds: PropTypes.number.isRequired,
    full_baths: PropTypes.number.isRequired,
    half_baths: PropTypes.number.isRequired,
    maint_cc: PropTypes.number.isRequired,
    property_type: PropTypes.string.isRequired,
    real_estate_tax: PropTypes.number.isRequired,
    sqft: PropTypes.number,
    total_rooms: PropTypes.number.isRequired,
  }),
});
