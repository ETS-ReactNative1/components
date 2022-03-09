"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomLabel = CustomLabel;

var _react = _interopRequireDefault(require("react"));

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RADIAN = Math.PI / 180;

function CustomLabel(payload, data) {
  var innerRadius = payload.innerRadius,
      outerRadius = payload.outerRadius,
      cx = payload.cx,
      cy = payload.cy,
      midAngle = payload.midAngle,
      value = payload.value,
      color = payload.color;
  var total = data.reduce(function (a, b) {
    return a + b.value;
  }, 0);
  var k = 0.35;
  var label = total ? (value * 100 / total).toFixed(0) : '0';

  if (label == '100') {
    k = 0.1;
  }

  var radius = innerRadius + (outerRadius - innerRadius) * k;
  var x = cx + radius * Math.cos(-midAngle * RADIAN);
  var y = cy + radius * Math.sin(-midAngle * RADIAN);
  return /*#__PURE__*/_react["default"].createElement(_recharts.Text, {
    x: x,
    y: y,
    fill: '#FFFFFF',
    textAnchor: x > cx ? 'start' : 'end',
    dominantBaseline: "central",
    style: {
      pointerEvents: 'none',
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: 19,
      letterSpacing: -0.25
    }
  }, "".concat(label, "%"));
}