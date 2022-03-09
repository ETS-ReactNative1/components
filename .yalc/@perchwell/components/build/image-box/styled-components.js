"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeImage = exports.Image = exports.Placeholder = exports.BackgroundBox = exports.BoxSpace = void 0;

var _core = require("@material-ui/core");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  z-index: -1;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  opacity: ", ";\n  transition: opacity 0.5s ease-in-out;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: ", ";\n  background-image: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BoxPositionStyles = (0, _styledComponents.css)(_templateObject());
var BoxSpace = (0, _styledComponents["default"])(_core.Box)(_templateObject2(), BoxPositionStyles);
exports.BoxSpace = BoxSpace;
var BackgroundBox = (0, _styledComponents["default"])(BoxSpace)(_templateObject3(), function (_ref) {
  var containedImage = _ref.containedImage;
  return containedImage ? 'contain' : 'cover';
}, function (_ref2) {
  var backgroundimage = _ref2.backgroundimage;
  return backgroundimage;
});
exports.BackgroundBox = BackgroundBox;
var Placeholder = (0, _styledComponents["default"])(BackgroundBox)(_templateObject4());
exports.Placeholder = Placeholder;
var Image = (0, _styledComponents["default"])(BackgroundBox)(_templateObject5(), function (_ref3) {
  var loaded = _ref3.loaded;
  return loaded === 'true' ? 1 : 0;
});
exports.Image = Image;

var FakeImage = _styledComponents["default"].img(_templateObject6(), BoxPositionStyles);

exports.FakeImage = FakeImage;