"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendItem = exports.Title = exports.YAxisLabel = exports.Wrapper = exports.LegendContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  color: rgba(0, 0, 0, 0.5);\n  font-family: Roboto;\n  width: 100%;\n  text-align: center;\n  &:nth-child(even) {\n    color: #e6e9eb;\n    position: relative;\n    width: 13%;\n    top: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: Copernicus;\n  font-style: italic;\n  font-size: ", ";\n  line-height: ", ";\n  letter-spacing: -1%;\n  margin-bottom: 40px;\n  margin-left: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: Copernicus;\n  font-weight: 600;\n  font-style: italic;\n  font-size: 14px;\n  line-height: 21px;\n  color: #929aa2;\n  margin-left: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fafafb;\n  width: 100%;\n  padding: 32px 20px 40px 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  left: 8.6%;\n  position: relative;\n  top: -5px;\n  width: 94.1%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LegendContainer = _styledComponents["default"].div(_templateObject());

exports.LegendContainer = LegendContainer;

var Wrapper = _styledComponents["default"].div(_templateObject2());

exports.Wrapper = Wrapper;

var YAxisLabel = _styledComponents["default"].p(_templateObject3());

exports.YAxisLabel = YAxisLabel;

var Title = _styledComponents["default"].p(_templateObject4(), function (_ref) {
  var isDesktop = _ref.isDesktop;
  return isDesktop ? '28px' : '18px';
}, function (_ref2) {
  var isDesktop = _ref2.isDesktop;
  return isDesktop ? '37.91px' : '24.37px';
});

exports.Title = Title;

var LegendItem = _styledComponents["default"].text(_templateObject5(), function (_ref3) {
  var isDesktop = _ref3.isDesktop;
  return isDesktop ? '14px' : '8px';
}, function (_ref4) {
  var isDesktop = _ref4.isDesktop;
  return isDesktop ? '-31px' : '-23px';
});

exports.LegendItem = LegendItem;