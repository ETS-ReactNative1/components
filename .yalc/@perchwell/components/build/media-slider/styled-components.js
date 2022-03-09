"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSlider = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _slider = require("../slider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    left: 2.8%;\n  }\n  ", " {\n    right: 2.8%;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSlider = (0, _styledComponents["default"])(_slider.Slider)(_templateObject(), _slider.PrevIcon, _slider.NextIcon, function (_ref) {
  var _theme$breakpoints$do;

  var theme = _ref.theme;
  return _defineProperty({}, theme.breakpoints.down('md'), (_theme$breakpoints$do = {}, _defineProperty(_theme$breakpoints$do, "".concat(_slider.PrevIcon), {
    left: '2%'
  }), _defineProperty(_theme$breakpoints$do, "".concat(_slider.NextIcon), {
    right: '2%'
  }), _theme$breakpoints$do));
});
exports.StyledSlider = StyledSlider;