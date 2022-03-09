"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeItems = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@perchwell/utils");

var _styledComponents = require("./styled-components");

var _treeItemLabel = require("./tree-item-label");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TreeItems(_ref) {
  var options = _ref.options,
      filters = _ref.filters,
      handleCheck = _ref.handleCheck;
  return options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.TreeItem, {
      key: option.id,
      nodeId: option.id,
      "data-tree-label-type": (0, _utils.hasChildren)(option) ? 'group-label' : 'label',
      label: /*#__PURE__*/_react["default"].createElement(_treeItemLabel.TreeItemLabel, {
        option: option,
        checked: (0, _helpers.isOptionChecked)(option, filters),
        onCheck: handleCheck
      }),
      onLabelClick: function onLabelClick(event) {
        event.preventDefault();
        handleCheck(option);
      }
    }, (0, _utils.hasChildren)(option) ? TreeItems({
      options: option.children,
      filters: filters,
      handleCheck: handleCheck
    }) : null);
  });
}

TreeItems.propTypes = {
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    name: _propTypes["default"].string.isRequired,
    variant: _propTypes["default"].string.isRequired,
    children: _propTypes["default"].arrayOf(_propTypes["default"].object)
  })).isRequired,
  filters: _propTypes["default"].object.isRequired,
  handleCheck: _propTypes["default"].func.isRequired
};

var Memo = /*#__PURE__*/_react["default"].memo(TreeItems);

exports.TreeItems = Memo;