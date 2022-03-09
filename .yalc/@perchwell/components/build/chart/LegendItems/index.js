"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendItems = LegendItems;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../helpers/utils");

var _styledComponents = require("../styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function LegendItems(_ref) {
  var items = _ref.items,
      isDesktop = _ref.isDesktop;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.LegendContainer, {
    isDesktop: isDesktop
  }, (0, _utils.interleave)((0, _utils.getUniqueListFromDates)(items), '|').map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.LegendItem, {
      key: "".concat(index, "+").concat(value),
      isDesktop: isDesktop
    }, value);
  }));
}