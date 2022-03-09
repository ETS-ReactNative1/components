"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeItemLabel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _core = require("@material-ui/core");

var _checkbox = require("../../checkbox");

var _styledComponents = require("./styled-components");

var _constants = require("../constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TreeItemLabel(_ref) {
  var option = _ref.option,
      checked = _ref.checked,
      handleCheck = _ref.handleCheck;
  var labelColor = (0, _react.useMemo)(function () {
    return _constants.mapOptionVariantToLabelColor[option.variant];
  }, [option.variant]);
  var handleChange = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    handleCheck(option);
  }, [handleCheck, option]);

  if (option.variant === _constants.OPTION_VARIANTS.TITLE) {
    return /*#__PURE__*/_react["default"].createElement(_core.Box, {
      p: "9px 0"
    }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      variant: "subtitle1",
      color: labelColor
    }, option.name));
  }

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.FormControlLabel, {
    value: option,
    control: /*#__PURE__*/_react["default"].createElement(_checkbox.Checkbox, {
      checked: checked
    }),
    label: /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      variant: "subtitle1",
      color: labelColor
    }, option.name),
    onChange: handleChange,
    labelPlacement: "start"
  });
}

TreeItemLabel.propTypes = {
  option: _propTypes.PropTypes.shape({
    name: _propTypes.PropTypes.string.isRequired,
    variant: _propTypes.PropTypes.string.isRequired
  }),
  checked: _propTypes.PropTypes.bool.isRequired,
  handleCheck: _propTypes.PropTypes.func
};
TreeItemLabel.defaultProps = {
  handleCheck: function handleCheck() {}
};

var Memo = /*#__PURE__*/_react["default"].memo(TreeItemLabel);

exports.TreeItemLabel = Memo;