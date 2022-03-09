"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  MediaViewer: true
};
exports.MediaViewer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _banner = require("../banner");

var _icons = require("../icons");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DIALOG_ID = 'image-viewer-dialog';
var playerProps = {
  width: '100%'
};

var clickFunction = function clickFunction(url, linkImages) {
  if (linkImages) {
    return function () {
      return window.open(url, '_blank');
    };
  } else {
    return null;
  }
};

var MediaViewer = function MediaViewer(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      media = _ref.media,
      linkImages = _ref.linkImages,
      Banner = _ref.banner,
      restSliderProps = _objectWithoutProperties(_ref, ["open", "onClose", "media", "linkImages", "banner"]);

  var focusActiveSlide = (0, _react.useCallback)(function () {
    var dialog = document.getElementById(DIALOG_ID);

    if (dialog) {
      var activeSlide = dialog.getElementsByClassName('slick-current')[0];
      activeSlide.focus();
    }
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    id: DIALOG_ID,
    open: open,
    onEnter: focusActiveSlide,
    onClose: onClose,
    fullScreen: true
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.Container, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.CloseButton, {
    disableRipple: true,
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement(_icons.CloseIcon, {
    fontSize: "large"
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents.Slider, _extends({
    slidesToShow: 1,
    arrowColor: "common.white",
    afterChange: focusActiveSlide,
    lazyLoad: "null",
    infinite: true
  }, restSliderProps), media.map(function (mediaItem, index) {
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.BannerContainer, {
      key: index,
      linkImages: linkImages
    }, /*#__PURE__*/_react["default"].createElement(Banner, _extends({
      playerProps: playerProps,
      onClick: clickFunction(mediaItem.contentURL, linkImages)
    }, mediaItem)));
  }))));
};

MediaViewer.defaultProps = {
  banner: _banner.Banner
};
MediaViewer.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  linkImages: _propTypes["default"].bool,
  media: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    contentURL: _propTypes["default"].string.isRequired,
    type: _propTypes["default"].string.isRequired
  })).isRequired,
  banner: _propTypes["default"].elementType,
  onClose: _propTypes["default"].func
};

var Memo = /*#__PURE__*/_react["default"].memo(MediaViewer);

exports.MediaViewer = Memo;