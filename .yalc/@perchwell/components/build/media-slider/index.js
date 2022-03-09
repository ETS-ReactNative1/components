"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  MediaSlider: true
};
exports.MediaSlider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _banner = require("../banner");

var _helpers = require("./helpers");

var _defaultBannerContent = require("./default-banner-content");

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MediaSlider = function MediaSlider(_ref) {
  var media = _ref.media,
      labels = _ref.labels,
      Content = _ref.content,
      Banner = _ref.banner,
      bgcolor = _ref.bgcolor,
      containedImage = _ref.containedImage,
      sliderProps = _objectWithoutProperties(_ref, ["media", "labels", "content", "banner", "bgcolor", "containedImage"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeVideoIndex = _useState2[0],
      setActiveVideoIndex = _useState2[1];

  var isTablet = (0, _core.useMediaQuery)(function (theme) {
    return theme.breakpoints.down('sm');
  });
  var data = (0, _react.useMemo)(function () {
    return (0, _helpers.normalizeMediaSliderData)(media, labels);
  }, [media, labels]);
  var handleSlideChange = (0, _react.useCallback)(function (_, index) {
    return setActiveVideoIndex(index);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledSlider, _extends({
    slidesToShow: 1,
    beforeChange: handleSlideChange,
    swipe: isTablet ? true : false,
    arrowColor: "common.white",
    lazyLoad: "ondemand",
    scrollable: false
  }, sliderProps), data.map(function (_ref2, index) {
    var type = _ref2.type,
        content_url = _ref2.content_url,
        title = _ref2.title,
        subtitle = _ref2.subtitle;
    var mediaImage = content_url;

    if (media.background_image && media.background_image.alt_text) {
      mediaImage = {
        content_url: content_url,
        alt_text: media.background_image.alt_text
      };
    }

    return /*#__PURE__*/_react["default"].createElement(Banner, {
      key: index,
      type: type,
      contentURL: mediaImage,
      bgcolor: bgcolor,
      pause: index !== activeVideoIndex,
      containedImage: containedImage
    }, /*#__PURE__*/_react["default"].createElement(Content, {
      title: title,
      subtitle: subtitle
    }));
  })));
};

MediaSlider.defaultProps = {
  media: {},
  labels: {},
  banner: _banner.Banner,
  content: _defaultBannerContent.DefaultBannerContent
};
MediaSlider.propTypes = {
  media: _propTypes["default"].object,
  labels: _propTypes["default"].object,
  bgcolor: _propTypes["default"].string,
  banner: _propTypes["default"].elementType,
  content: _propTypes["default"].elementType
};

var Memo = /*#__PURE__*/_react["default"].memo(MediaSlider);

exports.MediaSlider = Memo;