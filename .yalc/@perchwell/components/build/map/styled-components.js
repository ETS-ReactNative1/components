"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapContainer = exports.CloseButtonContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  height: 40px;\n  width: 40px;\n  background-color: #fff;\n  box-shadow: 0px 4px 4px 0px #00000040;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CloseButtonContainer = _styledComponents["default"].div(_templateObject());

exports.CloseButtonContainer = CloseButtonContainer;

var MapContainer = _styledComponents["default"].div(_templateObject2());

exports.MapContainer = MapContainer;