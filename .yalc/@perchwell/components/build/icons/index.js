"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowBackIcon = ArrowBackIcon;
exports.ArrowForwardIcon = ArrowForwardIcon;
exports.CloseIcon = CloseIcon;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ArrowBackIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.SvgIcon, _extends({}, props, {
    width: "83.688",
    height: "112.663",
    viewBox: "0 0 83.688 112.663"
  }), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "Icon_ionic-ios-arrow-forward",
    x: "0",
    y: "0",
    width: "83.688",
    height: "112.663",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react["default"].createElement("feOffset", {
    input: "SourceAlpha"
  }), /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    stdDeviation: "7.5",
    result: "blur"
  }), /*#__PURE__*/_react["default"].createElement("feFlood", {
    floodOpacity: "0.502"
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    operator: "in",
    in2: "blur"
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    "in": "SourceGraphic"
  }))), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "url(#Icon_ionic-ios-arrow-forward)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Icon_ionic-ios-arrow-forward-2",
    "data-name": "Icon ionic-ios-arrow-forward",
    d: "M22.909,40.015l25.6-25.585a4.815,4.815,0,0,0,0-6.829,4.876,4.876,0,0,0-6.849,0L12.655,36.591a4.827,4.827,0,0,0-.141,6.668l29.13,29.191a4.836,4.836,0,0,0,6.849-6.829Z",
    transform: "translate(11.25 16.3)"
  })));
}

function ArrowForwardIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.SvgIcon, _extends({}, props, {
    width: "83.687",
    height: "112.662",
    viewBox: "0 0 83.687 112.662"
  }), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "Icon_ionic-ios-arrow-forward",
    x: "0",
    y: "0",
    width: "83.687",
    height: "112.662",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react["default"].createElement("feOffset", {
    input: "SourceAlpha"
  }), /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    stdDeviation: "7.5",
    result: "blur"
  }), /*#__PURE__*/_react["default"].createElement("feFlood", {
    floodOpacity: "0.502"
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    operator: "in",
    in2: "blur"
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    "in": "SourceGraphic"
  }))), /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "url(#Icon_ionic-ios-arrow-forward)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    id: "Icon_ionic-ios-arrow-forward-2",
    "data-name": "Icon ionic-ios-arrow-forward",
    d: "M38.271,40.014,12.667,14.43a4.815,4.815,0,0,1,0-6.829,4.876,4.876,0,0,1,6.849,0L48.524,36.59a4.826,4.826,0,0,1,.141,6.668L19.536,72.448a4.836,4.836,0,0,1-6.849-6.829Z",
    transform: "translate(11.25 16.3)"
  })));
}

function CloseIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.SvgIcon, props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
}