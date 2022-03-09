"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  HeroImage: true
};
exports.HeroImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styled-components");

Object.keys(_styledComponents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _styledComponents[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styledComponents[key];
    }
  });
});

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HeroImage = function HeroImage(_ref) {
  var imageUrl = _ref.imageUrl,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Container, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.ImageContainer, {
    image: imageUrl,
    withGradient: true,
    withFallback: false
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents.HeroBody, {
    "class": "hero-body"
  }, children));
};

var Memo = /*#__PURE__*/_react["default"].memo(HeroImage);

exports.HeroImage = Memo;
HeroImage.propTypes = {
  imageUrl: _propTypes["default"].string.isRequired
};