"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _domain = require("@perchwell/domain");

var _utils = require("@perchwell/utils");

var _checkbox = require("../checkbox");

var _styledComponents = require("./styled-components");

var _collapseIcon = require("./collapse-icon");

var _label = require("./label");

var _items = require("./items");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Item(_ref) {
  var geography = _ref.geography,
      value = _ref.value,
      hiddenNodes = _ref.hiddenNodes,
      handleCheck = _ref.handleCheck;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      childrenHidden = _useState2[0],
      setСhildrenHidden = _useState2[1];

  var id = geography.id;
  var itemHasChildren = (0, _utils.hasChildren)(geography);
  var triggerCollapse = (0, _react.useCallback)(function (event) {
    setСhildrenHidden(!childrenHidden);
    event.stopPropagation();
  }, [childrenHidden]);
  var onLabelClick = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    handleCheck(geography);
  }, [geography, handleCheck]);

  if (hiddenNodes.includes(id)) {
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.TreeItem, {
      nodeId: id
    }, itemHasChildren ? /*#__PURE__*/_react["default"].createElement(_items.Items, {
      geographies: geography.children,
      value: value,
      hiddenNodes: hiddenNodes,
      handleCheck: handleCheck
    }) : null);
  }

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.TreeItem, {
    nodeId: id,
    label: /*#__PURE__*/_react["default"].createElement(_styledComponents.FormControlLabel, {
      value: geography,
      control: /*#__PURE__*/_react["default"].createElement(_checkbox.Checkbox, {
        checked: value.includes(id)
      }),
      label: /*#__PURE__*/_react["default"].createElement(_label.Label, {
        name: geography.name,
        type: geography.geography_type
      }),
      labelPlacement: "start"
    }),
    collapseIcon: /*#__PURE__*/_react["default"].createElement(_collapseIcon.CollapseIcon, {
      isOpen: !childrenHidden,
      isVisible: itemHasChildren
    }),
    onIconClick: triggerCollapse,
    onLabelClick: onLabelClick
  }, itemHasChildren ? /*#__PURE__*/_react["default"].createElement(_core.Collapse, {
    "in": !childrenHidden,
    timeout: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_items.Items, {
    geographies: geography.children,
    value: value,
    hiddenNodes: hiddenNodes,
    handleCheck: handleCheck
  })) : null, ' ');
}

Item.propTypes = {
  geography: _domain.GeographyType.isRequired,
  value: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  hiddenNodes: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  handleCheck: _propTypes["default"].func.isRequired
};

var Memo = /*#__PURE__*/_react["default"].memo(Item);

exports.Item = Memo;