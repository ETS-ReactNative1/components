"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransformBox = exports.AccordionContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transition: all 0.3s ease-out;\n  transform: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  margin-top: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccordionContent = (0, _styledComponents["default"])(_core.Box)(_templateObject(), function (_ref) {
  var _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'block' : _ref$display;
  return display;
}, function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.spacing(1), "px");
});
exports.AccordionContent = AccordionContent;
var TransformBox = (0, _styledComponents["default"])(_core.Box)(_templateObject2(), function (_ref3) {
  var _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? '' : _ref3$transform;
  return transform;
});
exports.TransformBox = TransformBox;