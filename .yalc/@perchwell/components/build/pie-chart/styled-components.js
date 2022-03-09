"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartLabelContainer = exports.LegendContentKeyColor = exports.LegendContentKey = exports.LegendContentContainer = exports.ChartContainer = exports.Title = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  width: 8px;\n  height: 8px;\n  margin-right: 8px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-family: Roboto;\n  font-size: ", "px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 150px;\n  border-radius: 5px;\n  border: 1px solid #ebedef;\n  padding-top: 20px;\n  padding-left: 10px;\n  ", "\n"]);

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fafafb !important;\n  width: max-content;\n  margin: ", ";\n  margin-left: ", ";\n  padding: 15px;\n  width: ", ";\n  ", "\n"]);

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
}, function (_ref4) {
  var isDesktop = _ref4.isDesktop;
  return !isDesktop ? 'height: 560px;' : '';
});

exports.Wrapper = Wrapper;

var Title = _styledComponents["default"].p(_templateObject2(), function (_ref5) {
  var isDesktop = _ref5.isDesktop;
  return isDesktop ? '28px' : '18px';
}, function (_ref6) {
  var isDesktop = _ref6.isDesktop;
  return isDesktop ? '37.91px' : '24.37px';
});

exports.Title = Title;

var ChartContainer = _styledComponents["default"].div(_templateObject3(), function (_ref7) {
  var isDesktop = _ref7.isDesktop;
  return isDesktop ? 'row' : 'column';
});

exports.ChartContainer = ChartContainer;

var LegendContentContainer = _styledComponents["default"].div(_templateObject4(), function (_ref8) {
  var isDesktop = _ref8.isDesktop;
  return isDesktop ? 'margin-left: 53px;' : 'margin-top: 19px';
});

exports.LegendContentContainer = LegendContentContainer;

var LegendContentKey = _styledComponents["default"].div(_templateObject5(), function (_ref9) {
  var isDesktop = _ref9.isDesktop;
  return isDesktop ? '14' : '12';
});

exports.LegendContentKey = LegendContentKey;

var LegendContentKeyColor = _styledComponents["default"].div(_templateObject6(), function (_ref10) {
  var color = _ref10.color;
  return color ? color : 'green';
});

exports.LegendContentKeyColor = LegendContentKeyColor;

var ChartLabelContainer = _styledComponents["default"].div(_templateObject7());

exports.ChartLabelContainer = ChartLabelContainer;