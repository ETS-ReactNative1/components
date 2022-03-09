"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = Accordion;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _ExpandMoreOutlined = _interopRequireDefault(require("@material-ui/icons/ExpandMoreOutlined"));

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Accordion(_ref) {
  var title = _ref.title,
      children = _ref.children;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var toggleAccordion = _react["default"].useCallback(function () {
    return setIsOpen(!isOpen);
  }, [isOpen]);

  return /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    alignItems: "center",
    justify: "space-between"
  }, title ? title : null, /*#__PURE__*/_react["default"].createElement(_styledComponents.TransformBox, {
    transform: isOpen ? 'rotateX(180deg)' : ''
  }, /*#__PURE__*/_react["default"].createElement(_ExpandMoreOutlined["default"], {
    fontSize: "large",
    onClick: toggleAccordion
  }))), isOpen ? /*#__PURE__*/_react["default"].createElement(_core.Fade, {
    "in": isOpen,
    timeout: 200
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.AccordionContent, null, children)) : null);
}

Accordion.propTypes = {
  title: _propTypes["default"].node,
  children: _propTypes["default"].node
};
Accordion.defaultProps = {
  title: null,
  children: null
};