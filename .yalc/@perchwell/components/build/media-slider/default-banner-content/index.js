"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  DefaultBannerContent: true
};
exports.DefaultBannerContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styledComponents = require("./styled-components");

Object.keys(_styledComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _styledComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styledComponents[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DefaultBannerContent = function DefaultBannerContent(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;
  var isXs = (0, _core.useMediaQuery)(function (theme) {
    return theme.breakpoints.down('xs');
  });
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Container, {
    container: true,
    direction: isXs ? 'column' : 'row',
    alignItems: "flex-end",
    wrap: "nowrap"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    container: true,
    xs: 12,
    md: 8,
    direction: "column",
    justify: "flex-end"
  }, title && /*#__PURE__*/_react["default"].createElement(_styledComponents.Title, {
    variant: "h1",
    color: "secondary"
  }, title), subtitle && /*#__PURE__*/_react["default"].createElement(_styledComponents.Subtitle, {
    color: "secondary"
  }, subtitle)));
};

exports.DefaultBannerContent = DefaultBannerContent;
DefaultBannerContent.defaultProps = {
  list: []
};
DefaultBannerContent.propTypes = {
  title: _propTypes["default"].string,
  subtitle: _propTypes["default"].string
};