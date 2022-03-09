"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmployeeType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EmployeeType = _propTypes["default"].shape({
  id: _propTypes["default"].number.isRequired,
  first_name: _propTypes["default"].string.isRequired,
  last_name: _propTypes["default"].string.isRequired,
  position: _propTypes["default"].number.isRequired,
  title: _propTypes["default"].string.isRequired,
  phone: _propTypes["default"].string,
  email: _propTypes["default"].string.isRequired,
  bio: _propTypes["default"].string.isRequired,
  created_at: _propTypes["default"].string,
  updated_at: _propTypes["default"].string,
  employee_type: _propTypes["default"].string.isRequired,
  image_urls: _propTypes["default"].arrayOf(_propTypes["default"].string)
});

exports.EmployeeType = EmployeeType;