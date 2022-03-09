"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreButton = exports.Content = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Mukta Vaani;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 800;\n  line-height: 50px;\n  letter-spacing: 0px;\n  text-transform: uppercase;\n  color: ", ";\n  cursor: pointer;\n\n  &:hover {\n    color: ", ";\n\n    ", ";\n  }\n\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & p {\n    margin: 20px 0;\n\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), {
    margin: '15px 0'
  });
});

exports.Content = Content;

var MoreButton = _styledComponents["default"].div(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.hover;
}, function (_ref5) {
  var theme = _ref5.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), {
    color: 'black',
    textDecoration: 'underline'
  });
}, function (_ref7) {
  var theme = _ref7.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), {
    color: 'black',
    textDecoration: 'underline',
    fontSize: 20,
    lineHeight: '33.24px'
  });
});

exports.MoreButton = MoreButton;