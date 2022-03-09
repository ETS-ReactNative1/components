"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuildingType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BuildingType = _propTypes["default"].shape({
  id: _propTypes["default"].number.isRequired,
  building_name: _propTypes["default"].string.isRequired,
  neighborhood_name: _propTypes["default"].string.isRequired,
  building_id: _propTypes["default"].number,
  building_website_url: _propTypes["default"].string,
  description: _propTypes["default"].string,
  client_website_neighborhood_id: _propTypes["default"].number,
  building_type: _propTypes["default"].string.isRequired,
  instagram_account: _propTypes["default"].string,
  position: _propTypes["default"].number.isRequired,
  image_urls: _propTypes["default"].arrayOf(_propTypes["default"].string),
  video_url: _propTypes["default"].string,
  address: _propTypes["default"].string,
  property_type: _propTypes["default"].string,
  price_min: _propTypes["default"].number,
  price_max: _propTypes["default"].number,
  beds_min: _propTypes["default"].number,
  beds_max: _propTypes["default"].number,
  baths_min: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  baths_max: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  features: _propTypes["default"].arrayOf(_propTypes["default"].string),
  total_units: _propTypes["default"].number,
  total_stories: _propTypes["default"].number,
  year_built: _propTypes["default"].number,
  occupancy_starting_description: _propTypes["default"].string
});

exports.BuildingType = BuildingType;