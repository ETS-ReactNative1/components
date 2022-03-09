"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieChart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recharts = require("recharts");

var _styledComponents = require("./styled-components");

var _getChartProps = require("./helpers/getChartProps");

var _CustomTooltip = require("./CustomTooltip");

var _LegendContent = require("./LegendContent");

var _ClosingsCount = require("./ClosingsCount");

var _CustomLabel = require("./CustomLabel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COLORS = ['#027A5E', '#009B77', '#30C392', '#63DFB6'];

function PieChart(_ref) {
  var isDesktop = _ref.isDesktop,
      title = _ref.title,
      data = _ref.data;

  var _useMemo = (0, _react.useMemo)(function () {
    return (0, _getChartProps.getChartResponsiveProps)(!isDesktop);
  }, [isDesktop]),
      chartProps = _useMemo.chartProps,
      pieProps = _useMemo.pieProps;

  var cleanedData = (0, _react.useMemo)(function () {
    var filteredData = data.filter(function (item) {
      return (item === null || item === void 0 ? void 0 : item.value) !== 0;
    });
    var res = filteredData.map(function (item, index) {
      var _item$color;

      var color = (_item$color = item.color) !== null && _item$color !== void 0 ? _item$color : COLORS[index % COLORS.length];
      return _objectSpread(_objectSpread({}, item), {}, {
        color: color
      });
    });
    return res;
  }, [data]);
  var closingCount = (0, _react.useMemo)(function () {
    return cleanedData.map(function (item) {
      return item.value;
    }).reduce(function (prev, next) {
      return prev + next;
    }, 0);
  }, [data]);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Wrapper, {
    isDesktop: isDesktop
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.Title, {
    isDesktop: isDesktop
  }, title), /*#__PURE__*/_react["default"].createElement(_styledComponents.ChartContainer, {
    isDesktop: isDesktop
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ChartLabelContainer, null, /*#__PURE__*/_react["default"].createElement(_recharts.PieChart, chartProps, /*#__PURE__*/_react["default"].createElement(_recharts.Pie, _extends({
    label: function label(payload) {
      return (0, _CustomLabel.CustomLabel)(payload, cleanedData);
    },
    labelLine: false,
    data: cleanedData,
    dataKey: "value",
    nameKey: "key",
    cx: "50%",
    cy: "50%"
  }, pieProps), cleanedData.map(function (_ref2, index) {
    var color = _ref2.color;
    return /*#__PURE__*/_react["default"].createElement(_recharts.Cell, {
      key: index,
      fill: color
    });
  })), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, {
    content: function content(payload) {
      return (0, _CustomTooltip.CustomTooltip)(payload, cleanedData);
    }
  })), /*#__PURE__*/_react["default"].createElement(_ClosingsCount.ClosingsCount, {
    isDesktop: isDesktop,
    count: closingCount
  })), /*#__PURE__*/_react["default"].createElement(_LegendContent.LegendContent, {
    isDesktop: isDesktop,
    data: cleanedData
  })));
}

PieChart.propTypes = {
  isDesktop: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  data: _propTypes["default"].array
};

var Memo = /*#__PURE__*/_react["default"].memo(PieChart);

exports.PieChart = Memo;