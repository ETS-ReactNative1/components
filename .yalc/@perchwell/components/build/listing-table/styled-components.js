"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoFee = exports.Title3 = exports.TableTitle = exports.Column = exports.NeighborhoodColumn = exports.TableContainer = exports.Title2 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 51px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 12px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.8);\n\n  font-family: Roboto;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 12px;\n  letter-spacing: 0.30000001192092896px;\n  text-align: left;\n  text-transform: uppercase;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Neutraface Display';\n  font-size: 25px;\n  font-style: normal;\n  line-height: 32px;\n  letter-spacing: 0px;\n  font-weight: 600;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: Mukta Vaani;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 200;\n  line-height: 38px;\n  letter-spacing: 0em;\n  text-align: left;\n\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: Mukta Vaani;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 38px;\n  letter-spacing: 0em;\n  text-align: left;\n\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  & table {\n    width: 100%;\n  }\n\n  & thead {\n    text-align: left;\n  }\n\n  & th {\n    padding-bottom: 28px;\n  }\n\n  & td {\n    padding-bottom: 28px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Neutraface Display';\n  font-size: 30px;\n  font-style: normal;\n  line-height: 36px;\n  letter-spacing: 0px;\n  font-weight: 600;\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title2 = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), {
    fontSize: 18,
    lineHeight: '18px'
  });
});

exports.Title2 = Title2;

var TableContainer = _styledComponents["default"].div(_templateObject2());

exports.TableContainer = TableContainer;

var NeighborhoodColumn = _styledComponents["default"].div(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), {
    fontSize: 15,
    lineHeight: '24.93px'
  });
});

exports.NeighborhoodColumn = NeighborhoodColumn;

var Column = _styledComponents["default"].td(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), {
    fontSize: 15,
    lineHeight: '24.93px'
  });
});

exports.Column = Column;
var TableTitle = (0, _styledComponents["default"])(Title2)(_templateObject5(), function (_ref7) {
  var theme = _ref7.theme;
  return _defineProperty({}, theme.breakpoints.down('xs'), {
    fontSize: 30,
    lineHeight: '30px'
  });
});
exports.TableTitle = TableTitle;

var Title3 = _styledComponents["default"].div(_templateObject6());

exports.Title3 = Title3;

var NoFee = _styledComponents["default"].div(_templateObject7());

exports.NoFee = NoFee;