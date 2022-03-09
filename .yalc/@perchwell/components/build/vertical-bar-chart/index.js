"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalBarChart = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("./styled-components");

var _chart = require("./chart");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function VerticalBarChart(_ref) {
  var isDesktop = _ref.isDesktop,
      title = _ref.title,
      data = _ref.data,
      _ref$legend = _ref.legend,
      legend = _ref$legend === void 0 ? '' : _ref$legend,
      _ref$formatLabel = _ref.formatLabel,
      formatLabel = _ref$formatLabel === void 0 ? function (v) {
    return v;
  } : _ref$formatLabel;
  var processedData = (0, _helpers.processData)(data);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Wrapper, {
    id: "vertical-bar-chart",
    isDesktop: isDesktop
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.Title, {
    isDesktop: isDesktop
  }, title), /*#__PURE__*/_react["default"].createElement(_chart.VerticalBarChart, {
    data: processedData,
    legend: legend,
    formatLabel: formatLabel,
    isDesktop: isDesktop
  }));
}

VerticalBarChart.propTypes = {
  isDesktop: _propTypes["default"].bool.isRequired,
  title: _propTypes["default"].string,
  data: _propTypes["default"].array.isRequired
};

var Memo = /*#__PURE__*/_react["default"].memo(VerticalBarChart);

exports.VerticalBarChart = Memo;