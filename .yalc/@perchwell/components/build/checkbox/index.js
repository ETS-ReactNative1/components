"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _hooks = require("@perchwell/hooks");

var _icons = require("../icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Checkbox(_ref) {
  var checked = _ref.checked,
      restProps = _objectWithoutProperties(_ref, ["checked"]);

  var size = (0, _hooks.useResponsive)({
    xs: 'small',
    sm: 'medium'
  });
  var theme = (0, _core.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_core.Checkbox, _extends({
    checked: checked,
    size: size,
    color: "primary",
    disableRipple: true,
    checkedIcon: /*#__PURE__*/_react["default"].createElement(_icons.CheckedIcon, {
      stroke: theme.palette.primary.main,
      fill: theme.palette.background["default"]
    }),
    icon: /*#__PURE__*/_react["default"].createElement(_icons.CheckedBorderIcon, {
      stroke: theme.palette.primary.main,
      fill: theme.palette.background["default"]
    })
  }, restProps));
}

Checkbox.propTypes = {
  checked: _propTypes["default"].bool.isRequired
};

var Memo = /*#__PURE__*/_react["default"].memo(Checkbox);

exports.Checkbox = Memo;