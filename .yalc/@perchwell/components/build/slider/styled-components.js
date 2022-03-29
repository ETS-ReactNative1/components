"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSlickSlider = exports.NextIcon = exports.PrevIcon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _icons = require("../icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  line-height: 0;\n  .slick-list {\n    margin: ", ";\n  }\n  .slick-slide > div > div {\n    padding: ", ";\n    outline: none;\n    &:focus {\n      outline: none;\n    }\n  }\n  .slick-track {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0;\n  }\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  right: -55px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  left: -55px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 1em;\n  height: 1em;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: ", ";\n  font-size: 3rem;\n  z-index: 1;\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getValueByPath() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var current = object;
  path.split('.').forEach(function (path) {
    var _current$path, _current;

    current = (_current$path = (_current = current) === null || _current === void 0 ? void 0 : _current[path]) !== null && _current$path !== void 0 ? _current$path : null;
  });
  return current;
}

var commonIconStyles = (0, _styledComponents.css)(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      arrowcolor = _ref.arrowcolor;
  return getValueByPath(theme.palette, arrowcolor);
}, function (_ref2) {
  var theme = _ref2.theme,
      arrowcolor = _ref2.arrowcolor;
  return getValueByPath(theme.palette, arrowcolor);
});
var PrevIcon = (0, _styledComponents["default"])(_icons.ArrowBackIcon)(_templateObject2(), commonIconStyles);
exports.PrevIcon = PrevIcon;
var NextIcon = (0, _styledComponents["default"])(_icons.ArrowForwardIcon)(_templateObject3(), commonIconStyles);
exports.NextIcon = NextIcon;
var StyledSlickSlider = (0, _styledComponents["default"])(_reactSlick["default"])(_templateObject4(), function (_ref3) {
  var spacing = _ref3.spacing;
  return spacing ? "-".concat(spacing) : '0px';
}, function (_ref4) {
  var spacing = _ref4.spacing;
  return spacing ? "".concat(spacing) : '0px';
}, function (_ref5) {
  var _theme$breakpoints$do;

  var theme = _ref5.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), (_theme$breakpoints$do = {}, _defineProperty(_theme$breakpoints$do, "".concat(PrevIcon), {
    left: '25px',
    fontSize: '2rem'
  }), _defineProperty(_theme$breakpoints$do, "".concat(NextIcon), {
    right: '15px',
    fontSize: '2rem'
  }), _theme$breakpoints$do));
});
exports.StyledSlickSlider = StyledSlickSlider;