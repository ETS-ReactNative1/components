"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _domain = require("@perchwell/domain");

var _mapGeographyTypeToLa;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapGeographyTypeToLabelColor = (_mapGeographyTypeToLa = {}, _defineProperty(_mapGeographyTypeToLa, _domain.ADMINISTRATIVE_DISTRICT_PLACE_TYPE, '#52585B'), _defineProperty(_mapGeographyTypeToLa, _domain.NEIGHBORHOOD_GROUP_PLACE_TYPE, '#52585B'), _defineProperty(_mapGeographyTypeToLa, _domain.NEIGHBORHOOD_PLACE_TYPE, '#52585B'), _mapGeographyTypeToLa);

var Label = function Label(_ref) {
  var name = _ref.name,
      type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    color: mapGeographyTypeToLabelColor[type]
  }, name);
};

Label.propTypes = {
  name: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string.isRequired
};

var Memo = /*#__PURE__*/_react["default"].memo(Label);

exports.Label = Memo;