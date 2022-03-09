"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTooltipNameColor = exports.CustomTooltipName = exports.CustomTooltipDescription = exports.CustomTooltipContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: green;\n  width: 8px;\n  height: 8px;\n  margin-right: 8px;\n  border-radius: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: Copernicus;\n  font-size: 14px;\n  font-weight: 400;\n  color: #404040;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Copernicus;\n  font-size: 15px;\n  font-weight: 600;\n  color: #006F6B;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 282px;\n  height: 52px;\n  background: #FFFFFF;\n  display: flex;\n  border-radius: 5px;\n  border: 1px solid #EBEDEF;\n  justify-content: space-around;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CustomTooltipContainer = _styledComponents["default"].div(_templateObject());

exports.CustomTooltipContainer = CustomTooltipContainer;

var CustomTooltipDescription = _styledComponents["default"].div(_templateObject2());

exports.CustomTooltipDescription = CustomTooltipDescription;

var CustomTooltipName = _styledComponents["default"].div(_templateObject3());

exports.CustomTooltipName = CustomTooltipName;

var CustomTooltipNameColor = _styledComponents["default"].div(_templateObject4());

exports.CustomTooltipNameColor = CustomTooltipNameColor;