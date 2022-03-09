"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapseIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: all 0.4s;\n  transform: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_core.IconButton)(_templateObject(), function (_ref) {
  var isopen = _ref.isopen;
  return isopen ? 'rotate(0)' : 'rotate(-180deg)';
});

var CollapseIcon = function CollapseIcon(_ref2) {
  var isOpen = _ref2.isOpen,
      isVisible = _ref2.isVisible;

  if (isVisible) {
    return /*#__PURE__*/_react["default"].createElement(Container, {
      size: "small",
      isopen: isOpen
    }, /*#__PURE__*/_react["default"].createElement(_KeyboardArrowUp["default"], null));
  } else {
    return null;
  }
};

CollapseIcon.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired
};

var Memo = /*#__PURE__*/_react["default"].memo(CollapseIcon);

exports.CollapseIcon = Memo;