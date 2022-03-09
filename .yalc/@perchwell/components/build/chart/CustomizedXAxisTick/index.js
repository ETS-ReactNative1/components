"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizedXAxisTick = CustomizedXAxisTick;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CustomizedXAxisTick(_ref) {
  var x = _ref.x,
      y = _ref.y,
      payload = _ref.payload,
      isDesktop = _ref.isDesktop;
  var textStyle = {
    fill: 'rgba(0, 0, 0, 0.5)',
    fontSize: isDesktop ? '14px' : '8px',
    marginRight: '10px',
    lineHeight: '20px',
    fontFamily: 'Roboto',
    fontWeight: 500
  };

  var getValue = function getValue() {
    try {
      var _payload$value;

      if (payload && payload.value && payload.value.slice) {
        return payload.value.slice(-2);
      }

      return (_payload$value = payload === null || payload === void 0 ? void 0 : payload.value) !== null && _payload$value !== void 0 ? _payload$value : '--';
    } catch (error) {
      return '';
    }
  };

  var val = getValue();
  return /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(".concat(x - (isDesktop ? 8 : 5), ",").concat(y, ")")
  }, /*#__PURE__*/_react["default"].createElement(_recharts.Text, {
    style: textStyle
  }, val));
}