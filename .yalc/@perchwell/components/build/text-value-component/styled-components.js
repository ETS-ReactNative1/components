"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledExpandIcon = exports.FilterPlaceholder = exports.FilterValue = exports.Container = void 0;

var _core = require("@material-ui/core");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ExpandMoreOutlined = _interopRequireDefault(require("@material-ui/icons/ExpandMoreOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 2rem;\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n  transform: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  white-space: nowrap;\n  ::-webkit-scrollbar {\n    display: none; /* Chrome, Safari and Opera */\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", ";\n  cursor: pointer;\n  border: ", ";\n  &:hover {\n    border-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_core.Box)(_templateObject(), function (_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? '100%' : _ref$height;
  return height;
}, function (_ref2) {
  var isopen = _ref2.isopen;
  return isopen === 'true' ? '0 5px 0 23px' : '0 6px 0 24px';
}, function (_ref3) {
  var isopen = _ref3.isopen,
      activeBorder = _ref3.activeBorder,
      border = _ref3.border;
  return isopen === 'true' ? "".concat(border) : "".concat(activeBorder);
}, function (_ref4) {
  var hoverBorderColor = _ref4.hoverBorderColor;
  return hoverBorderColor;
});
exports.Container = Container;
var FilterValue = (0, _styledComponents["default"])(_core.Typography)(_templateObject2());
exports.FilterValue = FilterValue;
var FilterPlaceholder = (0, _styledComponents["default"])(_core.Typography)(_templateObject3(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.grey.dark;
});
exports.FilterPlaceholder = FilterPlaceholder;
var StyledExpandIcon = (0, _styledComponents["default"])(_ExpandMoreOutlined["default"])(_templateObject4(), function (_ref6) {
  var iconColor = _ref6.iconColor;
  return iconColor;
}, function (_ref7) {
  var isopen = _ref7.isopen;
  return isopen === 'true' ? 'rotateX(180deg)' : '';
});
exports.StyledExpandIcon = StyledExpandIcon;