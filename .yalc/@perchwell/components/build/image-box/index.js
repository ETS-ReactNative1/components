"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ImageBox: true
};
exports.ImageBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _reactIntersectionObserver = require("react-intersection-observer");

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ImageBox = function ImageBox(_ref) {
  var image = _ref.image,
      withFallback = _ref.withFallback,
      viewConfig = _ref.viewConfig,
      children = _ref.children,
      containedImage = _ref.containedImage,
      bgcolor = _ref.bgcolor,
      restProps = _objectWithoutProperties(_ref, ["image", "withFallback", "viewConfig", "children", "containedImage", "bgcolor"]);

  var _useInView = (0, _reactIntersectionObserver.useInView)(viewConfig),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var onLoad = (0, _react.useCallback)(function () {
    setIsLoaded(true);
  }, []);
  var imageSRC = image;
  var altText = '';

  if (_typeof(image) === 'object') {
    imageSRC = image === null || image === void 0 ? void 0 : image.content_url;
    altText = image === null || image === void 0 ? void 0 : image.alt_text;
  }

  return /*#__PURE__*/_react["default"].createElement(_core.Box, _extends({
    position: "relative",
    bgcolor: bgcolor || "common.black"
  }, restProps), image && /*#__PURE__*/_react["default"].createElement(_styledComponents.FakeImage, {
    src: inView ? imageSRC : '',
    ref: ref,
    onLoad: onLoad,
    alt: altText
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Placeholder, {
    backgroundimage: withFallback ? "url(".concat(process.env.IMAGE_PLACEHOLDER_URL, ")") : 'none',
    containedImage: containedImage
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Image, {
    backgroundimage: inView ? "url(".concat(imageSRC, ")") : 'none',
    loaded: isLoaded.toString(),
    containedImage: containedImage
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents.BoxSpace, null, children));
};

ImageBox.propTypes = {
  image: _propTypes["default"].string,
  withFallback: _propTypes["default"].bool,
  bgcolor: _propTypes["default"].string,
  viewConfig: _propTypes["default"].object,
  containedImage: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
ImageBox.defaultProps = {
  withFallback: true,
  viewConfig: {
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50%'
  }
};

var Memo = /*#__PURE__*/_react["default"].memo(ImageBox);

exports.ImageBox = Memo;