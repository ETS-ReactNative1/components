"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MapIcon = function MapIcon(_ref) {
  var _ref$strokeColor = _ref.strokeColor,
      strokeColor = _ref$strokeColor === void 0 ? '#A9AEB1' : _ref$strokeColor,
      props = _objectWithoutProperties(_ref, ["strokeColor"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: 18,
    height: 18,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    clipPath: "url(#prefix__clip0_1432:4975)",
    stroke: strokeColor,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M.75 4.5v12l5.25-3 6 3 5.25-3v-12L12 4.5l-6-3-5.25 3zM6 1.5v12M12 4.5v12"
  })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: "prefix__clip0_1432:4975"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    d: "M0 0h18v18H0z"
  }))));
};

var _default = MapIcon;
exports["default"] = _default;