"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendContent = LegendContent;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function LegendContent(_ref) {
  var data = _ref.data,
      isDesktop = _ref.isDesktop;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.LegendContentContainer, {
    isDesktop: isDesktop
  }, data.map(function (item, index) {
    var key = item.key,
        color = item.color;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.LegendContentKey, {
      key: index,
      isDesktop: isDesktop
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents.LegendContentKeyColor, {
      color: color
    }), key);
  }));
}