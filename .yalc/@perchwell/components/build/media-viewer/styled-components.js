"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerContainer = exports.Slider = exports.CloseButton = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _slider = require("../slider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100vh;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  > div {\n    width: 100%;\n    height: 100%;\n    max-width: 71.4%;\n    max-height: 85%;\n  }\n  > div > div {\n    ", "\n    background-size: contain;\n  }\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    left: 7.2%;\n  }\n  ", " {\n    right: 7.2%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 15px;\n  color: ", ";\n  z-index: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_core.Grid)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.black;
});
exports.Container = Container;
var CloseButton = (0, _styledComponents["default"])(_core.IconButton)(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
});
exports.CloseButton = CloseButton;
var Slider = (0, _styledComponents["default"])(_slider.Slider)(_templateObject3(), _slider.PrevIcon, _slider.NextIcon);
exports.Slider = Slider;

var BannerContainer = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.linkImages && 'cursor: zoom-in;';
}, function (_ref3) {
  var theme = _ref3.theme;
  return _defineProperty({}, theme.breakpoints.down('md'), {
    '> div': {
      maxWidth: '100%'
    }
  });
});

exports.BannerContainer = BannerContainer;