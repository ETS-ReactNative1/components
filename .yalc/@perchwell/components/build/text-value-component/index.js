"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TextValueComponent: true
};
exports.TextValueComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("./styled-components");

Object.keys(_styledComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _styledComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styledComponents[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TextValueComponent(_ref) {
  var isDropdownOpen = _ref.isDropdownOpen,
      value = _ref.value,
      placeholder = _ref.placeholder,
      onClick = _ref.onClick,
      height = _ref.height,
      border = _ref.border,
      activeBorder = _ref.activeBorder,
      hoverBorderColor = _ref.hoverBorderColor,
      iconColor = _ref.iconColor;
  var isOpen = isDropdownOpen.toString();
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Container, {
    isopen: isOpen,
    className: isOpen === 'true' ? '-opened' : '',
    onClick: onClick,
    height: height,
    border: border,
    activeBorder: activeBorder,
    hoverBorderColor: hoverBorderColor
  }, value ? /*#__PURE__*/_react["default"].createElement(_styledComponents.FilterValue, {
    color: "textPrimary"
  }, value) : /*#__PURE__*/_react["default"].createElement(_styledComponents.FilterPlaceholder, null, placeholder), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExpandIcon, {
    isopen: isOpen,
    iconColor: '#000'
  }));
}

TextValueComponent.propTypes = {
  isDropdownOpen: _propTypes["default"].bool.isRequired,
  value: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  border: _propTypes["default"].string.isRequired,
  activeBorder: _propTypes["default"].string.isRequired
};

var Memo = /*#__PURE__*/_react["default"].memo(TextValueComponent);

exports.TextValueComponent = Memo;