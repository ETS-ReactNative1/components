"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClosingsCount = ClosingsCount;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ClosingsCount(_ref) {
  var count = _ref.count,
      isDesktop = _ref.isDesktop;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ClosingCountsContainer, {
    isDesktop: isDesktop
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ClosingCountsNumber, null, count), /*#__PURE__*/_react["default"].createElement(_styledComponents.ClosingCountsDescription, null, "Closings"));
}