"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomTick = function CustomTick(props) {
  var x = props.x,
      y = props.y,
      payload = props.payload;
  var value = payload.value;
  return /*#__PURE__*/_react["default"].createElement("g", {
    className: "recharts-layer recharts-cartesian-axis-tick"
  }, /*#__PURE__*/_react["default"].createElement(_recharts.Text, {
    height: "60",
    orientation: "bottom",
    width: "100",
    type: "category",
    x: x - 25,
    y: y + 17,
    stroke: "none",
    fill: "#005459",
    className: "recharts-text recharts-cartesian-axis-tick-value",
    "text-anchor": "middle",
    style: {
      fontSize: 14,
      fontFamily: 'Copernicus',
      fontWeight: '600',
      textAlign: 'center',
      lineHeight: 19
    }
  }, value));
};

var _default = CustomTick;
exports["default"] = _default;