"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _useDebounce3 = require("use-debounce");

var _utils = require("@perchwell/utils");

var _accordion = require("../accordion");

var _geographiesTree = require("../geographies-tree");

var _styledComponents = require("./styled-components");

var _filter = require("../filter");

var _valueComponent = require("./value-component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TreeInput = function TreeInput(_ref) {
  var geographies = _ref.data,
      viewMode = _ref.viewMode,
      noResultsMessage = _ref.noResultsMessage,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      noIcon = _ref.noIcon,
      withDropdownIcon = _ref.withDropdownIcon,
      filterKey = _ref.filterKey;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      filters = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchQuery = _useState4[0],
      setSearchQuery = _useState4[1];

  var _useDebounce = (0, _useDebounce3.useDebounce)(searchQuery, 150, {
    maxWait: 1000
  }),
      _useDebounce2 = _slicedToArray(_useDebounce, 1),
      debouncedSearchQuery = _useDebounce2[0];

  var handleInputChange = (0, _react.useCallback)(function (event) {
    return setSearchQuery(event.target.value);
  }, []);
  var handleTreeChange = (0, _react.useCallback)(function (value) {
    setFilter({
      key: filterKey,
      type: _utils.FILTER_TYPES.IN,
      value: value
    });
  }, [setFilter]);
  var handleClearFilter = (0, _react.useCallback)(function (event) {
    event.stopPropagation();
    setFilter({
      key: filterKey,
      type: _utils.FILTER_TYPES.IN,
      value: []
    });
  }, [setFilter]);
  var value = (0, _react.useMemo)(function () {
    return filters.value || [];
  }, [filters]);
  var inputValue = (0, _react.useMemo)(function () {
    var normalizedTree = (0, _utils.normalizeTree)({
      tree: geographies
    });
    return Object.keys(normalizedTree).filter(function (key) {
      return value.includes(key);
    }).map(function (key) {
      return normalizedTree[key];
    }).sort(_utils.bySortOrder).map(function (value) {
      return value.name;
    }).join(', ');
  }, [value]);

  var _useMemo = (0, _react.useMemo)(function () {
    return (0, _utils.filterGeographies)(geographies, debouncedSearchQuery);
  }, [debouncedSearchQuery]),
      hiddenNodes = _useMemo.hiddenNodes,
      noResults = _useMemo.noResults;

  (0, _react.useEffect)(function () {
    onChange(filters);
  }, [filters]);

  if (viewMode === 'mobile') {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_accordion.Accordion, {
      title: inputValue ? /*#__PURE__*/_react["default"].createElement(_styledComponents.MobileTitle, {
        variant: "subtitle1",
        noWrap: true
      }, "Places:", ' ', /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        component: "span",
        color: "primary",
        noWrap: true
      }, inputValue)) : /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        variant: "subtitle1"
      }, placeholder)
    }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
      maxHeight: "250px",
      overflow: "auto"
    }, /*#__PURE__*/_react["default"].createElement(_geographiesTree.GeographiesTree, {
      geographies: geographies,
      value: value,
      handleChange: handleTreeChange
    }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.MobileFilterDivider, null));
  }

  return /*#__PURE__*/_react["default"].createElement(_filter.Filter, {
    valueComponent: _valueComponent.ValueComponent,
    searchQuery: searchQuery,
    value: inputValue,
    onChange: handleInputChange,
    handleClearFilter: handleClearFilter,
    placeholder: placeholder,
    noIcon: noIcon,
    withDropdownIcon: withDropdownIcon
  }, noResults ? /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    color: "textPrimary"
  }, noResultsMessage) : /*#__PURE__*/_react["default"].createElement(_geographiesTree.GeographiesTree, {
    geographies: geographies,
    value: value,
    hiddenNodes: hiddenNodes,
    handleChange: handleTreeChange
  }));
};

exports.TreeInput = TreeInput;
TreeInput.propTypes = {
  data: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]),
  viewMode: _propTypes["default"].oneOf(['mobile', 'desktop']),
  noResultsMessage: _propTypes["default"].string,
  placeholder: _propTypes["default"].string.isRequired,
  noIcon: _propTypes["default"].bool,
  withDropdownIcon: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  filterKey: _propTypes["default"].string.isRequired
};
TreeInput.defaultProps = {
  viewMode: 'desktop',
  noResultsMessage: 'Sorry, no places match that search.',
  onChange: function onChange() {},
  placeholder: 'Default placeholder',
  noIcon: false,
  withDropdownIcon: false
};