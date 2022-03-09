"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClosingCountsDescription = exports.ClosingCountsNumber = exports.ClosingCountsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-family: Arial;\n  font-weight: 400;\n  font-size: 14px;\n  color: #606060;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Arial;\n  font-weight: 400;\n  font-size: 22px;\n  margin: 0;\n  text-align: center;\n  color: #000000;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  left: ", "%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  position: absolute;\n  text-align: center;\n  width: ", "%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ClosingCountsContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var isDesktop = _ref.isDesktop;
  return isDesktop ? '48' : '50';
}, function (_ref2) {
  var isDesktop = _ref2.isDesktop;
  return isDesktop ? '93' : '98';
});

exports.ClosingCountsContainer = ClosingCountsContainer;

var ClosingCountsNumber = _styledComponents["default"].div(_templateObject2());

exports.ClosingCountsNumber = ClosingCountsNumber;

var ClosingCountsDescription = _styledComponents["default"].div(_templateObject3());

exports.ClosingCountsDescription = ClosingCountsDescription;