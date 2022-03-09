"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialLinks = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _helpers = require("./helpers");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  > svg {\n    width: ", "px;\n    height: ", "px;\n    color: inherit;\n    cursor: pointer;\n    :hover {\n      color: ", ";\n    }\n    :not(:last-child) {\n      margin-right: ", "px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_core.Box)(_templateObject(), function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return color ? color : theme.palette.grey.dark;
}, function (_ref2) {
  var iconsize = _ref2.iconsize;
  return iconsize;
}, function (_ref3) {
  var iconsize = _ref3.iconsize;
  return iconsize;
}, function (_ref4) {
  var hovercolor = _ref4.hovercolor,
      theme = _ref4.theme;
  return hovercolor ? hovercolor : theme.palette.primary.main;
}, function (_ref5) {
  var spacing = _ref5.spacing;
  return spacing;
});

var SocialLinks = function SocialLinks(_ref6) {
  var urls = _ref6.urls,
      color = _ref6.color,
      hoverColor = _ref6.hoverColor,
      iconSize = _ref6.iconSize,
      spacing = _ref6.spacing;
  var theme = (0, _styles.useTheme)();
  var onClickHandler = (0, _react.useCallback)(function (url) {
    window.open(url, '_blank');
  }, []);
  if (!urls || !Object.keys(urls).length > 0) return null;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    iconsize: iconSize,
    spacing: spacing,
    color: color,
    hovercolor: hoverColor,
    theme: theme
  }, Object.keys(urls).map(function (key) {
    var Component = _helpers.mapUrlToIcon[key];
    return Component ? /*#__PURE__*/_react["default"].createElement(Component, {
      key: key,
      onClick: function onClick() {
        return onClickHandler(urls[key]);
      }
    }) : null;
  }));
};

exports.SocialLinks = SocialLinks;
SocialLinks.defaultProps = {
  urls: {},
  iconSize: 32,
  spacing: 15
};
SocialLinks.propTypes = {
  urls: _propTypes["default"].shape({
    twitter_url: _propTypes["default"].string,
    youtube_url: _propTypes["default"].string,
    facebook_url: _propTypes["default"].string,
    linkedin_url: _propTypes["default"].string,
    instagram_url: _propTypes["default"].string
  }),
  color: _propTypes["default"].string,
  hoverColor: _propTypes["default"].string,
  iconSize: _propTypes["default"].number,
  spacing: _propTypes["default"].number
};