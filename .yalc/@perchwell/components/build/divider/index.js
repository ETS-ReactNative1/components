"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = Divider;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  background-color: #ebebeb;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDivider = (0, _styledComponents["default"])(_core.Divider)(_templateObject(), function (_ref) {
  var _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '0' : _ref$margin;
  return margin;
});

function Divider(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledDivider, props);
}