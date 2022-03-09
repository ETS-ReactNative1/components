"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalBarChart = VerticalBarChart;

var _react = _interopRequireWildcard(require("react"));

var _recharts = require("recharts");

var _CustomTick = _interopRequireDefault(require("./CustomTick"));

var _CustomTooltip = _interopRequireDefault(require("./CustomTooltip"));

var _styledComponents = require("./styled-components");

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

function VerticalBarChart(_ref) {
  var data = _ref.data,
      legend = _ref.legend,
      formatLabel = _ref.formatLabel,
      isDesktop = _ref.isDesktop;

  var getViewportWidth = function getViewportWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  };

  var _useState = (0, _react.useState)(getViewportWidth()),
      _useState2 = _slicedToArray(_useState, 2),
      vw = _useState2[0],
      setVw = _useState2[1];

  var renderLegend = function renderLegend() {
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.LegendWrapper, null, legend);
  };

  var renderCustomizedLabel = function renderCustomizedLabel(props) {
    var x = props.x,
        y = props.y,
        width = props.width,
        value = props.value;
    return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_recharts.Text, {
      x: x + width / 2,
      y: y - 12,
      fill: "#006F6B",
      textAnchor: "middle",
      dominantBaseline: "middle",
      style: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 16
      }
    }, formatLabel(value)));
  };

  (0, _react.useEffect)(function () {
    var _document$querySelect;

    document.querySelectorAll('#vertical-bar-chart .recharts-cartesian-axis-tick-line').forEach(function (node) {
      return node.remove();
    });
    (_document$querySelect = document.querySelector('#vertical-bar-chart .recharts-cartesian-axis-line')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.setAttribute('stroke', '#E6E9EB');
  }, [data]);
  (0, _react.useEffect)(function () {
    function handleResize() {
      setVw(getViewportWidth());
    }

    window.addEventListener('resize', handleResize);
  }, []);

  var getChartProps = function getChartProps(isMobile) {
    if (isMobile) {
      return {
        width: vw * 0.9,
        height: 280
      };
    }

    return {
      width: 724,
      height: 500
    };
  };

  var chartProps = getChartProps(!isDesktop);
  var COLORS = ['#B8F6E8', '#5CDFC1', '#0ECFA2', '#03AC85', '#009572'];
  return /*#__PURE__*/_react["default"].createElement(_recharts.BarChart, _extends({
    data: data
  }, chartProps), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
    dataKey: "name",
    height: 60,
    tick: /*#__PURE__*/_react["default"].createElement(_CustomTick["default"], null),
    axisLine: true,
    fill: "#E6E9EB"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, {
    content: /*#__PURE__*/_react["default"].createElement(_CustomTooltip["default"], null),
    cursor: {
      fill: 'transparent'
    }
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, {
    content: renderLegend
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Bar, {
    isAnimationActive: false,
    dataKey: "value",
    fill: "#009572",
    minPointSize: 5
  }, /*#__PURE__*/_react["default"].createElement(_recharts.LabelList, {
    dataKey: "value",
    content: renderCustomizedLabel
  }), data.map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement(_recharts.Cell, {
      key: "cell-".concat(index),
      fill: COLORS[index % COLORS.length]
    });
  })));
}