"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCarousel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("./icons");

var _components = require("@perchwell/components");

var _styledComponents = require("./styled-components");

var _core = require("@material-ui/core");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ImageCarousel = function ImageCarousel(_ref) {
  var _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      _ref$viewMode = _ref.viewMode,
      viewMode = _ref$viewMode === void 0 ? 'desktop' : _ref$viewMode;

  var _images = _slicedToArray(images, 3),
      _images$ = _images[0],
      mainImage = _images$ === void 0 ? null : _images$,
      _images$2 = _images[1],
      img1 = _images$2 === void 0 ? null : _images$2,
      _images$3 = _images[2],
      img2 = _images$3 === void 0 ? null : _images$3;

  var theme = (0, _core.useTheme)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMediaViewerOpen = _useState2[0],
      setIsMediaViewerOpen = _useState2[1];

  var totalVisibleImages = [mainImage, img1, img2].filter(function (img) {
    return img !== null;
  }).length;

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 1),
      current = _useState4[0];

  var _useState5 = (0, _react.useState)(_toConsumableArray(images)),
      _useState6 = _slicedToArray(_useState5, 2),
      carouselImages = _useState6[0],
      setCarouselImages = _useState6[1];

  var focusOnImage = (0, _react.useCallback)(function (index) {
    var result = [];
    var currentIndex = index;

    for (var _ in images) {
      result.push(images[currentIndex]);
      currentIndex++;

      if (currentIndex === images.length) {
        currentIndex = 0;
      }
    }

    setCarouselImages(result);
    setIsMediaViewerOpen(true);
  }, [images]);
  (0, _react.useEffect)(function () {
    setCarouselImages(_toConsumableArray(images));
  }, [images]);

  if (viewMode === 'mobile') {
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.MobileContainer, null, /*#__PURE__*/_react["default"].createElement(_components.MediaViewer, {
      open: isMediaViewerOpen,
      onClose: function onClose() {
        return setIsMediaViewerOpen(false);
      },
      media: carouselImages.map(function (image) {
        return {
          contentURL: image,
          type: 'image'
        };
      })
    }), /*#__PURE__*/_react["default"].createElement(_components.ImageBox, {
      image: mainImage,
      width: "100%",
      height: "100%"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      id: "button",
      onClick: function onClick() {
        return setIsMediaViewerOpen(true);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      id: "icon"
    }, /*#__PURE__*/_react["default"].createElement(_icons.ImageIcon, {
      stroke: theme.palette.primary.main
    })), /*#__PURE__*/_react["default"].createElement("span", {
      id: "label"
    }, " ".concat(current, "/").concat(images.length))));
  }

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.Wrapper, null, /*#__PURE__*/_react["default"].createElement(_components.MediaViewer, {
    open: isMediaViewerOpen,
    onClose: function onClose() {
      return setIsMediaViewerOpen(false);
    },
    media: carouselImages.map(function (image) {
      return {
        contentURL: image,
        type: 'image'
      };
    })
  }), totalVisibleImages >= 3 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return focusOnImage(0);
    },
    className: "main-img"
  }, /*#__PURE__*/_react["default"].createElement(_components.ImageBox, {
    image: mainImage,
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return focusOnImage(1);
    },
    className: "img-1"
  }, /*#__PURE__*/_react["default"].createElement(_components.ImageBox, {
    image: img1,
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return focusOnImage(2);
    },
    className: "img-2"
  }, /*#__PURE__*/_react["default"].createElement(_components.ImageBox, {
    image: img2,
    width: "100%",
    height: "100%"
  })))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.MainImage, {
    image: mainImage
  })), images.length > 1 && /*#__PURE__*/_react["default"].createElement(_styledComponents.IconButton, {
    startIcon: /*#__PURE__*/_react["default"].createElement(_icons.ImageIcon, null),
    onClick: function onClick() {
      return focusOnImage(0);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "See All ", "".concat(images.length), " photos")));
};

exports.ImageCarousel = ImageCarousel;