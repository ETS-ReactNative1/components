"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicationType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PublicationType = _propTypes["default"].shape({
  id: _propTypes["default"].number.isRequired,
  url: _propTypes["default"].string.isRequired,
  image_urls: _propTypes["default"].arrayOf(_propTypes["default"].string),
  title: _propTypes["default"].string.isRequired,
  news_source: _propTypes["default"].string.isRequired,
  client_website_employees: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].number.isRequired,
    first_name: _propTypes["default"].string.isRequired,
    last_name: _propTypes["default"].string.isRequired,
    image_urls: _propTypes["default"].arrayOf(_propTypes["default"].string)
  })),
  client_website_neighborhoods: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].number.isRequired,
    name: _propTypes["default"].string.isRequired
  })),
  publicatin_date: _propTypes["default"].string,
  body: _propTypes["default"].string,
  tags: _propTypes["default"].object
});

exports.PublicationType = PublicationType;