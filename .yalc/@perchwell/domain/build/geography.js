"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeographyType = exports.NEIGHBORHOOD_PLACE_TYPE = exports.NEIGHBORHOOD_GROUP_PLACE_TYPE = exports.ADMINISTRATIVE_DISTRICT_PLACE_TYPE = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ADMINISTRATIVE_DISTRICT_PLACE_TYPE = 'administrative_district';
exports.ADMINISTRATIVE_DISTRICT_PLACE_TYPE = ADMINISTRATIVE_DISTRICT_PLACE_TYPE;
var NEIGHBORHOOD_GROUP_PLACE_TYPE = 'neighborhood_group';
exports.NEIGHBORHOOD_GROUP_PLACE_TYPE = NEIGHBORHOOD_GROUP_PLACE_TYPE;
var NEIGHBORHOOD_PLACE_TYPE = 'neighborhood';
exports.NEIGHBORHOOD_PLACE_TYPE = NEIGHBORHOOD_PLACE_TYPE;

var GeographyPlacetType = _propTypes["default"].oneOf([ADMINISTRATIVE_DISTRICT_PLACE_TYPE, NEIGHBORHOOD_GROUP_PLACE_TYPE, NEIGHBORHOOD_PLACE_TYPE]);

function lazyFunction(f) {
  return function () {
    return f.apply(this, arguments);
  };
}

var LazyGeographyType = lazyFunction(function () {
  return GeographyType;
});

var GeographyType = _propTypes["default"].shape({
  id: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].arrayOf(LazyGeographyType),
  geography_type: GeographyPlacetType.isRequired,
  name: _propTypes["default"].string.isRequired,
  selectable: _propTypes["default"].bool.isRequired,
  sort_order: _propTypes["default"].number.isRequired
});

exports.GeographyType = GeographyType;