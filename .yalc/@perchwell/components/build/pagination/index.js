"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _lab = require("@material-ui/lab");

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pagination = function Pagination(props) {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Wrapper, null, /*#__PURE__*/_react["default"].createElement(_lab.Pagination, props));
};

var Memo = /*#__PURE__*/_react["default"].memo(Pagination);

exports.Pagination = Memo;