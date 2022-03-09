"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTooltip = CustomTooltip;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CustomTooltip(_ref, data) {
  var _payload$;

  var payload = _ref.payload;

  var _ref2 = function () {
    var _label;

    var currentItem = payload[0];

    if (!currentItem) {
      return {
        label: '',
        color: ''
      };
    }

    var _currentItem$name = currentItem.name,
        name = _currentItem$name === void 0 ? '' : _currentItem$name;
    var label = name;
    var n = 10;

    if (((_label = label) === null || _label === void 0 ? void 0 : _label.length) > n) {
      label = label.substring(0, n) + '...';
    }

    var color = data.find(function (_ref3) {
      var key = _ref3.key;
      return key === name;
    }).color;
    return {
      label: label,
      color: color
    };
  }(),
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? '' : _ref2$label,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? '' : _ref2$color;

  var properties = (_payload$ = payload[0]) === null || _payload$ === void 0 ? void 0 : _payload$.value;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipName, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipNameColor, {
    color: color
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipNameText, null, label)), /*#__PURE__*/_react["default"].createElement(_styledComponents.CustomTooltipDescription, null, properties, " properties"));
}

CustomTooltip.propTypes = {
  data: _propTypes["default"].array,
  title: _propTypes["default"].string,
  isDesktop: _propTypes["default"].bool,
  yAxisLabel: _propTypes["default"].string,
  xAxisFormatter: _propTypes["default"].func
};