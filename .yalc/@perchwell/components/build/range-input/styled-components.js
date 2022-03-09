"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileFilterDivider = exports.ErrorContainer = exports.InputContainer = exports.MobileContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _divider = require("../divider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 2px;\n  margin: 20px 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 10px;\n  margin-top: 15px;\n\n  & .MuiTypography-colorSecondary {\n    color: ", ";\n    ", "\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .MuiInputBase-root {\n    width: 100%;\n    margin-top: 10px;\n    height: 40px;\n    color: ", ";\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-column-gap: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-row-gap: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_core.Box)(_templateObject());
exports.Container = Container;
var MobileContainer = (0, _styledComponents["default"])(_core.Box)(_templateObject2());
exports.MobileContainer = MobileContainer;
var InputContainer = (0, _styledComponents["default"])(_core.Box)(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
}, function (_ref2) {
  var theme = _ref2.theme;
  return _defineProperty({}, theme.breakpoints.down('sm'), {
    '.MuiInputBase-input': {
      textAlign: 'center'
    }
  });
});
exports.InputContainer = InputContainer;
var ErrorContainer = (0, _styledComponents["default"])(_core.Box)(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.secondary.main;
}, function (_ref6) {
  var _ref6$mobileErrorStyl = _ref6.mobileErrorStyles,
      mobileErrorStyles = _ref6$mobileErrorStyl === void 0 ? {} : _ref6$mobileErrorStyl;
  return mobileErrorStyles;
});
exports.ErrorContainer = ErrorContainer;
var MobileFilterDivider = (0, _styledComponents["default"])(_divider.Divider)(_templateObject5());
exports.MobileFilterDivider = MobileFilterDivider;