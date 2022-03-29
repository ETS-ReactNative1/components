"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowBackIcon = ArrowBackIcon;
exports.ArrowForwardIcon = ArrowForwardIcon;
exports.CloseIcon = CloseIcon;
exports.MapPinIcon = MapPinIcon;
exports.CloseBorderIcon = CloseBorderIcon;
exports.DropdownIcon = DropdownIcon;
exports.CheckedIcon = CheckedIcon;
exports.CheckedBorderIcon = CheckedBorderIcon;
Object.defineProperty(exports, "MapIcon", {
  enumerable: true,
  get: function get() {
    return _mapIcon["default"];
  }
});

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _mapIcon = _interopRequireDefault(require("./map-icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function MapPinIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.SvgIcon, _extends({}, props, {
    viewBox: "0 0 288 512"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"
  }));
}

function CloseBorderIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.SvgIcon, _extends({}, props, {
    viewBox: "0 0 511.995 511.995"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005 s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874 C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0 c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0 C493.435,187.359,493.435,324.651,409.08,409.006z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046 c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02 c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046 c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111 c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z"
  }));
}

function DropdownIcon(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: 12,
    height: 8,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 6L6 2 2 6",
    stroke: "#52585B",
    strokeWidth: 1.5,
    strokeLinecap: "square"
  }));
}

function CheckedIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#fff' : _ref$fill,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? '#7CC5A7' : _ref$stroke,
      rest = _objectWithoutProperties(_ref, ["fill", "stroke"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: 15,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    stroke: stroke,
    d: "M.5.5h14v14H.5z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: stroke,
    d: "M2 2h11v11H2z"
  }));
}

function CheckedBorderIcon(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? '#fff' : _ref2$fill,
      _ref2$stroke = _ref2.stroke,
      stroke = _ref2$stroke === void 0 ? '#7CC5A7' : _ref2$stroke,
      rest = _objectWithoutProperties(_ref2, ["fill", "stroke"]);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: 15,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    stroke: stroke,
    d: "M.5.5h14v14H.5z"
  }));
}