"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileView = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var titleStyle = {
  fontSize: 20,
  fontWeight: 400,
  marginBottom: 12
};
var labelStyle = {
  fontWeight: 'bold',
  fontSize: 12,
  lineHeight: '16px'
};

function MobileView(_ref) {
  var title = _ref.title,
      minProps = _ref.minProps,
      maxProps = _ref.maxProps,
      errorMessage = _ref.errorMessage,
      _ref$hideDivider = _ref.hideDivider,
      hideDivider = _ref$hideDivider === void 0 ? false : _ref$hideDivider,
      _ref$mobileErrorMessa = _ref.mobileErrorMessageStyles,
      mobileErrorMessageStyles = _ref$mobileErrorMessa === void 0 ? {} : _ref$mobileErrorMessa,
      _ref$divider = _ref.divider,
      Divider = _ref$divider === void 0 ? _styledComponents.MobileFilterDivider : _ref$divider;

  var minLabel = minProps.label,
      restMinProps = _objectWithoutProperties(minProps, ["label"]);

  var maxLabel = maxProps.label,
      restMaxProps = _objectWithoutProperties(maxProps, ["label"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "subtitle1",
    style: titleStyle
  }, title), /*#__PURE__*/_react["default"].createElement(_styledComponents.MobileContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.InputContainer, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "caption",
    color: "#000",
    component: "p",
    align: "left",
    style: labelStyle
  }, minLabel), /*#__PURE__*/_react["default"].createElement(_core.OutlinedInput, _extends({
    name: "min"
  }, restMinProps))), /*#__PURE__*/_react["default"].createElement(_styledComponents.InputContainer, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "caption",
    color: "#000",
    component: "p",
    align: "left",
    style: labelStyle
  }, maxLabel), /*#__PURE__*/_react["default"].createElement(_core.OutlinedInput, _extends({
    name: "max"
  }, restMaxProps)))), errorMessage ? /*#__PURE__*/_react["default"].createElement(_styledComponents.ErrorContainer, {
    mobileErrorStyles: mobileErrorMessageStyles
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    color: "secondary"
  }, errorMessage)) : null, hideDivider ? null : /*#__PURE__*/_react["default"].createElement(Divider, null));
}

MobileView.propTypes = {
  title: _propTypes["default"].string.isRequired,
  minProps: _propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired
  }),
  maxProps: _propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired
  }),
  errorMessage: _propTypes["default"].string,
  hideDivider: _propTypes["default"].bool,
  divider: _propTypes["default"].element,
  mobileErrorMessageStyles: _propTypes["default"].object
};

var Memo = /*#__PURE__*/_react["default"].memo(MobileView);

exports.MobileView = Memo;