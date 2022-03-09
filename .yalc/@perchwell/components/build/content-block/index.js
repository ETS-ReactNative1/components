"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentBlock = ContentBlock;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  > * {\n    padding-left: 7.2%;\n    padding-right: 7.2%;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBox = (0, _styledComponents["default"])(_core.Box)(_templateObject(), function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      nomobilepadding = _ref.nomobilepadding,
      desktoppadding = _ref.desktoppadding;
  return _ref2 = {}, _defineProperty(_ref2, theme.breakpoints.down('xs'), {
    '> *': _objectSpread({}, nomobilepadding === 'true' && {
      paddingLeft: 0,
      paddingRight: 0
    })
  }), _defineProperty(_ref2, theme.breakpoints.up('xl'), {
    '> *': {
      maxWidth: '1920px',
      margin: '0 auto',
      paddingLeft: desktoppadding,
      paddingRight: desktoppadding
    }
  }), _ref2;
});

function ContentBlock(_ref3) {
  var noMobilePadding = _ref3.noMobilePadding,
      children = _ref3.children,
      desktopPadding = _ref3.desktopPadding,
      restProps = _objectWithoutProperties(_ref3, ["noMobilePadding", "children", "desktopPadding"]);

  var theme = (0, _styles.useTheme)();

  if (children) {
    return /*#__PURE__*/_react["default"].createElement(StyledBox, _extends({
      component: "section",
      nomobilepadding: noMobilePadding.toString(),
      bgcolor: "background.default",
      desktoppadding: desktopPadding,
      theme: theme
    }, restProps), children);
  }

  return null;
}

ContentBlock.propTypes = {
  noMobilePadding: _propTypes["default"].bool,
  desktopPadding: _propTypes["default"].string,
  children: _propTypes["default"].node
};
ContentBlock.defaultProps = {
  desktopPadding: '0 140px 0 140px',
  noMobilePadding: false
};