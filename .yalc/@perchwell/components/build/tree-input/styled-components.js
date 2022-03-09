"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileTitle = exports.MobileFilterDivider = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _divider = require("../divider");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 2px;\n  margin: 20px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MobileFilterDivider = (0, _styledComponents["default"])(_divider.Divider)(_templateObject());
exports.MobileFilterDivider = MobileFilterDivider;
var MobileTitle = (0, _styledComponents["default"])(_core.Typography)(_templateObject2());
exports.MobileTitle = MobileTitle;