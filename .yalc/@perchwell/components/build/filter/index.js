"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hooks = require("@perchwell/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-width: ", ";\n  z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledPopper = (0, _styledComponents["default"])(_core.Popper)(_templateObject(), function (_ref) {
  var minwidth = _ref.minwidth;
  return minwidth;
});

function Filter(_ref2) {
  var children = _ref2.children,
      ValueComponent = _ref2.valueComponent,
      maxHeight = _ref2.maxHeight,
      onClose = _ref2.onClose,
      popperMinWidth = _ref2.popperMinWidth,
      restProps = _objectWithoutProperties(_ref2, ["children", "valueComponent", "maxHeight", "onClose", "popperMinWidth"]);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var isDropdownOpen = (0, _react.useMemo)(function () {
    return Boolean(anchorEl);
  }, [anchorEl]);
  var closeDropdown = (0, _react.useCallback)(function () {
    if (isDropdownOpen) {
      setAnchorEl(null);
      if (onClose) onClose();
    }
  }, [isDropdownOpen, onClose]);
  var handleEnterPress = (0, _react.useCallback)(function (event) {
    if (event.key === 'Enter') {
      closeDropdown();
    }
  }, [closeDropdown]);
  (0, _hooks.useDocumentEvent)('keydown', handleEnterPress);
  var handleClick = (0, _react.useCallback)(function (event) {
    setAnchorEl(isDropdownOpen ? null : event.currentTarget);
  }, [isDropdownOpen]);
  return /*#__PURE__*/_react["default"].createElement(_core.ClickAwayListener, {
    mouseEvent: "onMouseDown",
    touchEvent: "onTouchStart",
    onClickAway: closeDropdown
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    position: "relative",
    height: "64px"
  }, /*#__PURE__*/_react["default"].createElement(ValueComponent, _extends({
    onClick: handleClick,
    isDropdownOpen: isDropdownOpen
  }, restProps)), /*#__PURE__*/_react["default"].createElement(StyledPopper, {
    minwidth: popperMinWidth,
    placement: "bottom-end",
    open: isDropdownOpen,
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true
  }, function (_ref3) {
    var TransitionProps = _ref3.TransitionProps;
    return /*#__PURE__*/_react["default"].createElement(_core.Fade, TransitionProps, /*#__PURE__*/_react["default"].createElement(_core.Box, {
      maxHeight: maxHeight,
      bgcolor: "background.default",
      boxShadow: 1,
      overflow: "auto",
      p: "12px"
    }, children));
  })));
}

Filter.propTypes = {
  children: _propTypes["default"].node.isRequired,
  valueComponent: _propTypes["default"].elementType.isRequired,
  maxHeight: _propTypes["default"].string,
  onClose: _propTypes["default"].func,
  popperMinWidth: _propTypes["default"].string
};
Filter.defaultProps = {
  maxHeight: '300px',
  popperMinWidth: '100%'
};

var Memo = /*#__PURE__*/_react["default"].memo(Filter);

exports.Filter = Memo;