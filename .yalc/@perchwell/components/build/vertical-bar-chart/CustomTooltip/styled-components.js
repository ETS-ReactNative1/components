"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spacer = exports.DotColor = exports.DescriptionLabel = exports.PropertiesLabel = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    width: 8px;\n    height: 8px;\n    margin-left: 8px;\n    border-radius: 50%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-family: Copernicus;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 19px;\n    letter-spacing: 0em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-family: Copernicus;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 20px;\n    color: #006F6B;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 52px;\n    width: 282px;\n    background-color: #FFFFFF;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    border: 1px solid #EBE9E9;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

exports.Wrapper = Wrapper;

var PropertiesLabel = _styledComponents["default"].div(_templateObject2());

exports.PropertiesLabel = PropertiesLabel;

var DescriptionLabel = _styledComponents["default"].div(_templateObject3());

exports.DescriptionLabel = DescriptionLabel;

var DotColor = _styledComponents["default"].div(_templateObject4(), function (_ref) {
  var color = _ref.color;
  return color ? color : 'green';
});

exports.DotColor = DotColor;

var Spacer = _styledComponents["default"].div(_templateObject5(), function (_ref2) {
  var width = _ref2.width;
  return width && "".concat(width);
}, function (_ref3) {
  var height = _ref3.height;
  return height && "".concat(height);
});

exports.Spacer = Spacer;