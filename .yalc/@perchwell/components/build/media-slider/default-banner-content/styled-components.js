"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.Subtitle = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _parsedText = require("../../parsed-text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = (0, _styledComponents["default"])(_parsedText.ParsedText)(_templateObject());
exports.Title = Title;
var Subtitle = (0, _styledComponents["default"])(_parsedText.ParsedText)(_templateObject2());
exports.Subtitle = Subtitle;
var Container = (0, _styledComponents["default"])(_core.Grid)(_templateObject3());
exports.Container = Container;