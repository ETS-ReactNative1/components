"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  .MuiOutlinedInput-notchedOutline {\n    top: 0;\n    > legend {\n      line-height: 0;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.9rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMapPinIcon = (0, _styledComponents["default"])(_icons.MapPinIcon)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.grey.dark;
});
var StyledCloseBorderIcon = (0, _styledComponents["default"])(_icons.CloseBorderIcon)(_templateObject2());
var Input = (0, _styledComponents["default"])(_core.OutlinedInput)(_templateObject3());

function ValueComponent(_ref2) {
  var isDropdownOpen = _ref2.isDropdownOpen,
      searchQuery = _ref2.searchQuery,
      value = _ref2.value,
      handleClearFilter = _ref2.handleClearFilter,
      placeholder = _ref2.placeholder,
      noIcon = _ref2.noIcon,
      withDropdownIcon = _ref2.withDropdownIcon,
      restProps = _objectWithoutProperties(_ref2, ["isDropdownOpen", "searchQuery", "value", "handleClearFilter", "placeholder", "noIcon", "withDropdownIcon"]);

  return /*#__PURE__*/_react["default"].createElement(Input, _extends({
    placeholder: placeholder,
    value: isDropdownOpen ? searchQuery : value,
    startAdornment: noIcon ? null : /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
      position: "start"
    }, withDropdownIcon ? /*#__PURE__*/_react["default"].createElement(_icons.DropdownIcon, null) : /*#__PURE__*/_react["default"].createElement(StyledMapPinIcon, null)),
    endAdornment: value ? /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      color: "primary",
      onClick: handleClearFilter,
      size: "small",
      disableFocusRipple: true,
      disableTouchRipple: true,
      disableRipple: true
    }, /*#__PURE__*/_react["default"].createElement(StyledCloseBorderIcon, null))) : null,
    fullWidth: true
  }, restProps));
}

ValueComponent.propTypes = {
  isDropdownOpen: _propTypes["default"].bool.isRequired,
  searchQuery: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string.isRequired,
  handleClearFilter: _propTypes["default"].func.isRequired,
  placeholder: _propTypes["default"].string,
  noIcon: _propTypes["default"].bool,
  withDropdownIcon: _propTypes["default"].bool
};
ValueComponent.defaultProps = {
  noIcon: false,
  withDropdownIcon: false
};

var Memo = /*#__PURE__*/_react["default"].memo(ValueComponent);

exports.ValueComponent = Memo;