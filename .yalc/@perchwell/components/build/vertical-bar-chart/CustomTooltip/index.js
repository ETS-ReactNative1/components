"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CustomTooltip = function CustomTooltip(_ref) {
  var payload = _ref.payload;

  if (payload.length === 0) {
    return null;
  }

  var _payload = _slicedToArray(payload, 1),
      props = _payload[0];

  var data = props.payload,
      color = props.color;
  var name = data.name,
      count = data.count;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Wrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.DescriptionLabel, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.DotColor, {
    color: color
  }), " ", /*#__PURE__*/_react["default"].createElement(_styledComponents.Spacer, {
    width: "8px"
  }), " ", /*#__PURE__*/_react["default"].createElement("span", null, name))), /*#__PURE__*/_react["default"].createElement(_styledComponents.PropertiesLabel, null, "".concat(count, " properties")));
};

var _default = CustomTooltip;
exports["default"] = _default;