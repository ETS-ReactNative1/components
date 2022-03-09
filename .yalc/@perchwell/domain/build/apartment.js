"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApartmentType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ApartmentType = _propTypes["default"].shape({
  id: _propTypes["default"].number.isRequired,
  listing_details: _propTypes["default"].shape({
    current_price: _propTypes["default"].number.isRequired
  }),
  location: _propTypes["default"].shape({
    address: _propTypes["default"].string.isRequired,
    address_with_unit: _propTypes["default"].string.isRequired,
    place: _propTypes["default"].string.isRequired
  }),
  media: _propTypes["default"].shape({
    large_image_list: _propTypes["default"].arrayOf(_propTypes["default"].string),
    original_image_list: _propTypes["default"].arrayOf(_propTypes["default"].string),
    main_floor_plan: _propTypes["default"].string,
    video_url: _propTypes["default"].string
  }),
  unit_details: _propTypes["default"].shape({
    beds: _propTypes["default"].number.isRequired,
    full_baths: _propTypes["default"].number.isRequired,
    half_baths: _propTypes["default"].number.isRequired,
    maint_cc: _propTypes["default"].number.isRequired,
    property_type: _propTypes["default"].string.isRequired,
    real_estate_tax: _propTypes["default"].number.isRequired,
    sqft: _propTypes["default"].number,
    total_rooms: _propTypes["default"].number.isRequired
  })
});

exports.ApartmentType = ApartmentType;