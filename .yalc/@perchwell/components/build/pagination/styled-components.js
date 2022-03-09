"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & .MuiPagination-root {\n    & .MuiPaginationItem-root {\n      font-family: 'Roboto';\n    }\n    & .Mui-selected {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.secondary;
});

exports.Wrapper = Wrapper;