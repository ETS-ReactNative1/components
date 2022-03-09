"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainImage = exports.MobileContainer = exports.IconButton = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _components = require("@perchwell/components");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  min-height: 720px;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 198px;\n  width: 100%;\n  position: relative;\n\n  & #button {\n    position: absolute;\n    width: 83px;\n    height: 32px;\n    background-color: #fff;\n    bottom: 8.22px;\n    right: 8px;\n    border: 1px solid ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n\n    & #icon {\n      margin-right: 10px;\n    }\n    & #label {\n      font-family: 'Neutraface Display';\n      font-style: normal;\n      font-weight: 600;\n      font-size: 15px;\n      line-height: 24px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  bottom: 13.22px;\n  right: 17.5px;\n  padding: 4px 12px;\n  height: 32px;\n  width: 188px;\n  text-transform: uppercase;\n  background-color: ", ";\n  color: ", ";\n\n  font-family: 'Neutraface Display';\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 600;\n  letter-spacing: 0em;\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  min-height: 720px;\n\n  & .grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 45px;\n    grid-row-gap: 45px;\n    & img {\n      object-fit: fill;\n    }\n    min-height: 720px;\n  }\n\n  & .main-img {\n    grid-area: 1 / 1 / 3 / 3;\n    cursor: pointer;\n  }\n  & .img-1 {\n    grid-area: 1 / 3 / 2 / 4;\n    cursor: pointer;\n  }\n  & .img-2 {\n    grid-area: 2 / 3 / 3 / 4;\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

exports.Wrapper = Wrapper;
var IconButton = (0, _styledComponents["default"])(_core.Button)(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.hover;
});
exports.IconButton = IconButton;

var MobileContainer = _styledComponents["default"].div(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
});

exports.MobileContainer = MobileContainer;
var MainImage = (0, _styledComponents["default"])(_components.ImageBox)(_templateObject4());
exports.MainImage = MainImage;