"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageIcon = ImageIcon;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ImageIcon(_ref) {
  var _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? '#fff' : _ref$stroke,
      rest = _objectWithoutProperties(_ref, ["stroke"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: 19,
    height: 19,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.75 3.025H4.25a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-10.5a1.5 1.5 0 00-1.5-1.5z",
    stroke: stroke,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.875 8.275a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM16.25 12.025l-3.75-3.75-8.25 8.25",
    stroke: stroke,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}