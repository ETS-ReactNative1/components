"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendWrapper = exports.ChartContainer = exports.Title = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-family: Copernicus;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  color: #929AA2;\n  font-weight: 700;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: Copernicus;\n  font-style: italic;\n  font-size: ", ";\n  line-height: ", ";\n  letter-spacing: -1%;\n  margin-bottom: 40px;\n  margin-left: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #FAFAFB !important;\n  margin: ", ";\n  margin-left: ", ";\n  padding: 15px;  \n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var isDesktop = _ref.isDesktop;
  return isDesktop ? 0 : 'auto';
}, function (_ref2) {
  var isDesktop = _ref2.isDesktop;
  return isDesktop ? 'auto' : '0';
}, function (_ref3) {
  var isDesktop = _ref3.isDesktop;
  return isDesktop ? '754px' : '100vw';
});

exports.Wrapper = Wrapper;

var Title = _styledComponents["default"].p(_templateObject2(), function (_ref4) {
  var isDesktop = _ref4.isDesktop;
  return isDesktop ? '28px' : '18px';
}, function (_ref5) {
  var isDesktop = _ref5.isDesktop;
  return isDesktop ? '37.91px' : '24.37px';
});

exports.Title = Title;

var ChartContainer = _styledComponents["default"].div(_templateObject3(), function (_ref6) {
  var isDesktop = _ref6.isDesktop;
  return isDesktop ? 'row' : 'column';
});

exports.ChartContainer = ChartContainer;

var LegendWrapper = _styledComponents["default"].div(_templateObject4());

exports.LegendWrapper = LegendWrapper;