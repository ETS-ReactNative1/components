"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MEDIA_TYPES", {
  enumerable: true,
  get: function get() {
    return _constants.MEDIA_TYPES;
  }
});
exports.Banner = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

var _imageBox = require("../image-box");

var _videoBanner = require("../video-banner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Banner = function Banner(_ref) {
  var type = _ref.type,
      contentURL = _ref.contentURL,
      pause = _ref.pause,
      videoConfigProps = _ref.videoConfigProps,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["type", "contentURL", "pause", "videoConfigProps", "children"]);

  if (type === _constants.MEDIA_TYPES.IMAGE) {
    return /*#__PURE__*/_react["default"].createElement(_imageBox.ImageBox, _extends({
      image: contentURL,
      position: "relative",
      withFallback: false
    }, restProps), children);
  }

  return /*#__PURE__*/_react["default"].createElement(_videoBanner.VideoBanner, _extends({
    contentURL: contentURL,
    pause: pause,
    configProps: videoConfigProps
  }, restProps), children);
};

exports.Banner = Banner;
Banner.propTypes = {
  type: _propTypes["default"].oneOf(Object.values(_constants.MEDIA_TYPES)),
  contentURL: _propTypes["default"].string.isRequired,
  pause: _propTypes["default"].bool,
  videoConfigProps: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
Banner.defaultProps = {
  type: _constants.MEDIA_TYPES.IMAGE,
  videoConfigProps: {},
  children: null
};