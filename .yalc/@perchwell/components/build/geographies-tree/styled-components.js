"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeView = exports.TreeItem = exports.FormControlLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  .MuiTypography-root {\n    word-break: break-word;\n  }\n  .MuiTreeItem-label {\n    padding: 0;\n  }\n  .MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label {\n    background-color: transparent;\n  }\n  .MuiTreeItem-root.Mui-selected\n    > .MuiTreeItem-content\n    .MuiTreeItem-label:hover {\n    background-color: rgba(0, 0, 0, 0.04);\n  }\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormControlLabel = (0, _styledComponents["default"])(_core.FormControlLabel)(_templateObject());
exports.FormControlLabel = FormControlLabel;
var TreeItem = (0, _styledComponents["default"])(_lab.TreeItem)(_templateObject2());
exports.TreeItem = TreeItem;
var TreeView = (0, _styledComponents["default"])(_lab.TreeView)(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), {
    '.MuiTreeItem-content': {
      padding: '7.5px 0'
    },
    '.MuiCheckbox-root': {
      padding: 0,
      marginRight: '10px'
    }
  });
});
exports.TreeView = TreeView;