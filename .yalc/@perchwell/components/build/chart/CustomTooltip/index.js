"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTooltip = CustomTooltip;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("./styled-components");

var _utils = require("@perchwell/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CustomTooltip(_ref) {
  var _payload$, _payload$$payload, _payload$2;

  var payload = _ref.payload;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipName, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipNameColor, null), (_payload$ = payload[0]) === null || _payload$ === void 0 ? void 0 : (_payload$$payload = _payload$.payload) === null || _payload$$payload === void 0 ? void 0 : _payload$$payload.key), /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipDescription, null, "$", (0, _utils.formatCurrency)((_payload$2 = payload[0]) === null || _payload$2 === void 0 ? void 0 : _payload$2.value)));
}

CustomTooltip.propTypes = {
  data: _propTypes["default"].array,
  title: _propTypes["default"].string,
  isDesktop: _propTypes["default"].bool,
  yAxisLabel: _propTypes["default"].string,
  xAxisFormatter: _propTypes["default"].func
};
CustomTooltip.defaultProps = {
  data: [],
  isDesktop: false
};