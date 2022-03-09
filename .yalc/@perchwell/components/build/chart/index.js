"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recharts = require("recharts");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CustomizedXAxisTick = require("./CustomizedXAxisTick");

var _styledComponents = require("./styled-components");

var _CustomizedYAxisTick = require("./CustomizedYAxisTick");

var _LegendItems = require("./LegendItems");

var _chartProps = require("./helpers/chartProps");

var _CustomTooltip = require("./CustomTooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Chart(_ref) {
  var title = _ref.title,
      data = _ref.data,
      isDesktop = _ref.isDesktop,
      yAxisLabel = _ref.yAxisLabel,
      xAxisFormatter = _ref.xAxisFormatter,
      aspect = _ref.aspect;

  var _useMemo = (0, _react.useMemo)(function () {
    return (0, _chartProps.getChartResponsiveProps)(!isDesktop);
  }, [isDesktop]),
      cartesianGridProps = _useMemo.cartesianGridProps,
      lineProps = _useMemo.lineProps,
      referenceLineProps = _useMemo.referenceLineProps,
      xAxisProps = _useMemo.xAxisProps,
      yAxisProps = _useMemo.yAxisProps,
      chartProps = _useMemo.chartProps;

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Wrapper, {
    isDesktop: isDesktop
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.Title, {
    isDesktop: isDesktop
  }, title), /*#__PURE__*/_react["default"].createElement(_styledComponents.YAxisLabel, {
    isDesktop: isDesktop
  }, yAxisLabel), /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    aspect: aspect
  }, /*#__PURE__*/_react["default"].createElement(_recharts.LineChart, _extends({
    data: data
  }, chartProps), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, _extends({
    dataKey: "key",
    tick: /*#__PURE__*/_react["default"].createElement(_CustomizedXAxisTick.CustomizedXAxisTick, {
      isDesktop: isDesktop
    }),
    tickFormatter: xAxisFormatter
  }, xAxisProps)), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, _extends({
    dataKey: "value",
    scale: "auto",
    interval: 0,
    tick: /*#__PURE__*/_react["default"].createElement(_CustomizedYAxisTick.CustomizedYAxisTick, {
      isDesktop: isDesktop
    })
  }, yAxisProps)), /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, cartesianGridProps), /*#__PURE__*/_react["default"].createElement(_recharts.ReferenceLine, referenceLineProps), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, {
    content: /*#__PURE__*/_react["default"].createElement(_LegendItems.LegendItems, {
      items: data,
      isDesktop: isDesktop
    })
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Line, _extends({
    dataKey: "value"
  }, lineProps)), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, {
    content: /*#__PURE__*/_react["default"].createElement(_CustomTooltip.CustomTooltip, null)
  }))));
}

Chart.propTypes = {
  data: _propTypes["default"].array,
  title: _propTypes["default"].string,
  isDesktop: _propTypes["default"].bool,
  yAxisLabel: _propTypes["default"].string,
  xAxisFormatter: _propTypes["default"].func,
  containerStyle: _propTypes["default"].object,
  aspect: _propTypes["default"].number
};
Chart.defaultProps = {
  data: [],
  isDesktop: false,
  aspect: 2.0,
  containerStyle: {}
};

var Memo = /*#__PURE__*/_react["default"].memo(Chart);

exports.Chart = Memo;