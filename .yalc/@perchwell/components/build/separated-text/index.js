"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeparatedText = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SeparatedText(_ref) {
  var values = _ref.values,
      separator = _ref.separator,
      rest = _objectWithoutProperties(_ref, ["values", "separator"]);

  return /*#__PURE__*/_react["default"].createElement(_core.Typography, rest, values.map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, value && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      component: "span",
      color: "inherit",
      noWrap: true
    }, value), index !== values.length - 1 ? separator : null));
  }));
}

SeparatedText.propTypes = {
  values: _propTypes["default"].arrayOf(_propTypes["default"].string),
  separator: _propTypes["default"].string
};
SeparatedText.defaultProps = {
  values: [],
  separator: ' | '
};

var Memo = /*#__PURE__*/_react["default"].memo(SeparatedText);

exports.SeparatedText = Memo;