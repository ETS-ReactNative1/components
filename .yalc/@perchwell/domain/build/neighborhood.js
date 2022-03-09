"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NeighborhoodType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NeighborhoodType = _propTypes["default"].shape({
  id: _propTypes["default"].number.isRequired,
  name: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string,
  image_urls: _propTypes["default"].arrayOf(_propTypes["default"].string),
  geometry: _propTypes["default"].shape({
    type: _propTypes["default"].string.isRequired,
    coordinates: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].number)))).isRequired
  }),
  boundary_descriptions: _propTypes["default"].arrayOf(_propTypes["default"].string),
  nearby_neighborhoods: _propTypes["default"].arrayOf(_propTypes["default"].string),
  subways: _propTypes["default"].arrayOf(_propTypes["default"].string),
  detail_title: _propTypes["default"].string,
  detail_description: _propTypes["default"].string,
  detail_images: _propTypes["default"].arrayOf(_propTypes["default"].string)
});

exports.NeighborhoodType = NeighborhoodType;