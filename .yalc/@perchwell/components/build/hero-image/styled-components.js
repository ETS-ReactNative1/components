"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContainer = exports.HeroBody = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _components = require("@perchwell/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: calc(100vh - 77px);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-weight: 700;\n  font-size: 45px;\n\n  @media (max-width: 768px) {\n    & .hero-text {\n      font-size: 35px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: calc(100vh - 77px);\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var HeroBody = _styledComponents["default"].div(_templateObject2());

exports.HeroBody = HeroBody;
var ImageContainer = (0, _styledComponents["default"])(_components.ImageBox)(_templateObject3());
exports.ImageContainer = ImageContainer;