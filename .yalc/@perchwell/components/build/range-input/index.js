"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textValueComponent = require("./../text-value-component");

var _desktopView = require("./desktop-view");

var _helpers = require("./helpers");

var _mobileView = require("./mobile-view");

var _utils = require("@perchwell/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var INITIAL_MAX_MIN = {
  min: null,
  max: null
};

function RangeInput(_ref) {
  var title = _ref.title,
      filterKey = _ref.filterKey,
      minLabel = _ref.minLabel,
      maxLabel = _ref.maxLabel,
      errorMessage = _ref.errorMessage,
      startAdornment = _ref.startAdornment,
      inputValueViewConfig = _ref.inputValueViewConfig,
      placeholder = _ref.placeholder,
      pattern = _ref.pattern,
      viewMode = _ref.viewMode,
      activeBorder = _ref.activeBorder,
      border = _ref.border,
      hoverBorderColor = _ref.hoverBorderColor,
      iconColor = _ref.iconColor,
      onChange = _ref.onChange,
      hideDivider = _ref.hideDivider,
      _ref$filterValue = _ref.filterValue,
      filterValue = _ref$filterValue === void 0 ? {} : _ref$filterValue,
      rest = _objectWithoutProperties(_ref, ["title", "filterKey", "minLabel", "maxLabel", "errorMessage", "startAdornment", "inputValueViewConfig", "placeholder", "pattern", "viewMode", "activeBorder", "border", "hoverBorderColor", "iconColor", "onChange", "hideDivider", "filterValue"]);

  var _useState = (0, _react.useState)(function () {
    try {
      var filter = filterValue[filterKey];

      if (filter) {
        return filter.value;
      }

      return INITIAL_MAX_MIN;
    } catch (_) {
      return INITIAL_MAX_MIN;
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      filters = _useState4[0],
      setFilters = _useState4[1];

  var initialState = (0, _react.useMemo)(function () {
    var _filters$filterKey, _filters$filterKey$va, _filters$filterKey2, _filters$filterKey2$v;

    return {
      min: filters === null || filters === void 0 ? void 0 : (_filters$filterKey = filters[filterKey]) === null || _filters$filterKey === void 0 ? void 0 : (_filters$filterKey$va = _filters$filterKey.value) === null || _filters$filterKey$va === void 0 ? void 0 : _filters$filterKey$va.min,
      max: filters === null || filters === void 0 ? void 0 : (_filters$filterKey2 = filters[filterKey]) === null || _filters$filterKey2 === void 0 ? void 0 : (_filters$filterKey2$v = _filters$filterKey2.value) === null || _filters$filterKey2$v === void 0 ? void 0 : _filters$filterKey2$v.max
    };
  }, [filters, filterKey]);

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showError = _useState6[0],
      setShowError = _useState6[1];

  var regex = (0, _react.useMemo)(function () {
    return new RegExp(pattern);
  }, [pattern]);
  var min = state.min,
      max = state.max;
  var handleChange = (0, _react.useCallback)(function (event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    var aux = _objectSpread({}, state);

    var valueWithoutComma = value.replace(/,/g, '');

    if (valueWithoutComma === '') {
      aux[name] = null;
      setState(aux);
      setShowError(false);
      return;
    }

    if (regex.test(valueWithoutComma)) {
      aux[name] = Number(valueWithoutComma);
      setState(aux);
      setShowError(false);
    }
  }, [regex, state]);
  var updateFilterValue = (0, _react.useCallback)(function () {
    if ((0, _helpers.hasRangeError)({
      min: min,
      max: max
    })) {
      return setState(initialState);
    }

    setFilters({
      type: _utils.FILTER_TYPES.RANGE,
      key: filterKey,
      value: {
        min: (0, _utils.isNil)(min) ? null : Number(min),
        max: (0, _utils.isNil)(max) ? null : Number(max)
      }
    });
  }, [min, max, initialState, setFilters, filterKey]);
  var handleBlur = (0, _react.useCallback)(function () {
    var hasError = (0, _helpers.hasRangeError)({
      min: min,
      max: max
    });
    setShowError(hasError);

    if (viewMode === 'mobile' && !hasError) {
      updateFilterValue();
    }
  }, [min, max, viewMode, updateFilterValue]);
  var value = (0, _react.useMemo)(function () {
    return (0, _helpers.getRangeValue)({
      min: min,
      max: max,
      config: inputValueViewConfig
    });
  }, [filterKey, inputValueViewConfig, state]);
  var minProps = (0, _react.useMemo)(function () {
    return {
      label: minLabel,
      placeholder: '-',
      value: (0, _helpers.formatRangeValue)(min),
      startAdornment: min ? startAdornment : null,
      onChange: handleChange,
      onBlur: handleBlur
    };
  }, [minLabel, min, startAdornment, handleChange, handleBlur, state]);
  var maxProps = (0, _react.useMemo)(function () {
    return {
      label: maxLabel,
      placeholder: '-',
      value: (0, _helpers.formatRangeValue)(max),
      startAdornment: max ? startAdornment : null,
      onChange: handleChange,
      onBlur: handleBlur
    };
  }, [maxLabel, max, startAdornment, handleChange, handleBlur, state]);
  var handleOnChangeisVisible = (0, _react.useCallback)(function () {
    setShowError(false);
    updateFilterValue();
  }, [showError, updateFilterValue]);
  (0, _react.useEffect)(function () {
    onChange(filters);
  }, [filters]);

  if (viewMode === 'mobile') {
    return /*#__PURE__*/_react["default"].createElement(_mobileView.MobileView, _extends({
      title: title,
      minProps: minProps,
      maxProps: maxProps,
      errorMessage: showError ? errorMessage : null,
      hideDivider: hideDivider
    }, rest));
  }

  return /*#__PURE__*/_react["default"].createElement(_desktopView.DesktopView, _extends({
    valueComponent: _textValueComponent.TextValueComponent,
    value: value,
    placeholder: placeholder,
    maxHeight: "400px",
    onClose: updateFilterValue,
    minProps: minProps,
    maxProps: maxProps,
    errorMessage: showError ? errorMessage : null,
    activeBorder: activeBorder,
    border: border,
    hoverBorderColor: hoverBorderColor,
    iconColor: iconColor,
    onChangeisVisible: handleOnChangeisVisible
  }, rest));
}

RangeInput.propTypes = {
  title: _propTypes["default"].string.isRequired,
  filterKey: _propTypes["default"].string.isRequired,
  minLabel: _propTypes["default"].string.isRequired,
  maxLabel: _propTypes["default"].string.isRequired,
  errorMessage: _propTypes["default"].string.isRequired,
  startAdornment: _propTypes["default"].string,
  inputValueViewConfig: _propTypes["default"].object,
  placeholder: _propTypes["default"].string.isRequired,
  pattern: _propTypes["default"].string,
  viewMode: _propTypes["default"].oneOf(['mobile', 'desktop']),
  activeBorder: _propTypes["default"].string.isRequired,
  border: _propTypes["default"].string.isRequired,
  hoverBorderColor: _propTypes["default"].string.isRequired,
  iconColor: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  hideDivider: _propTypes["default"].bool
};
RangeInput.defaultProps = {
  startAdornment: null,
  inputValueViewConfig: {},
  pattern: '^[0-9]+$',
  viewMode: 'desktop',
  activeBorder: '1px solid #989898',
  border: '1px solid #989898',
  hoverBorderColor: '1px solid #989898',
  iconColor: '#979797',
  onChange: function onChange() {},
  hideDivider: false
};

var Memo = /*#__PURE__*/_react["default"].memo(RangeInput);

exports.RangeInput = Memo;