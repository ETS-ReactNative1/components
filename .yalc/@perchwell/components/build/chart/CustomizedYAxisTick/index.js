"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizedYAxisTick = CustomizedYAxisTick;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

var _utils = require("@perchwell/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CustomizedYAxisTick(_ref) {
  var x = _ref.x,
      y = _ref.y,
      payload = _ref.payload,
      isDesktop = _ref.isDesktop;
  var textStyle = {
    fill: '#AFAFB0',
    fontSize: isDesktop ? '14px' : '8px',
    lineHeight: '20px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    textAlign: 'right'
  };
  return /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(".concat(x, ",").concat(y, ")"),
    textAnchor: "start"
  }, /*#__PURE__*/_react["default"].createElement(_recharts.Text, {
    style: textStyle
  }, "$".concat((0, _utils.formatCurrency)(payload.value))));
}