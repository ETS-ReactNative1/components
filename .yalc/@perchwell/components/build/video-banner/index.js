"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoBanner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPlayer = _interopRequireDefault(require("react-player"));

var _reactIntersectionObserver = require("react-intersection-observer");

require("./styles.css");

var _mediaContext = require("../media-context");

var _styledComponents = require("./styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultPlayerConfig = {
  youtube: {
    playerVars: {
      fs: 0,
      modestbranding: 1
    }
  }
};

function VideoBanner(_ref) {
  var contentURL = _ref.contentURL,
      pause = _ref.pause,
      bgcolor = _ref.bgcolor,
      children = _ref.children,
      configProps = _ref.configProps,
      playerProps = _ref.playerProps,
      containerProps = _objectWithoutProperties(_ref, ["contentURL", "pause", "bgcolor", "children", "configProps", "playerProps"]);

  var _useMediaContext = (0, _mediaContext.useMediaContext)(),
      _useMediaContext2 = _slicedToArray(_useMediaContext, 2),
      isSoundOn = _useMediaContext2[0].isSoundOn,
      setMediaState = _useMediaContext2[1];

  var _useInView = (0, _reactIntersectionObserver.useInView)({
    threshold: 0.5
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var _useReducer = (0, _react.useReducer)(function (s, a) {
    return _objectSpread(_objectSpread({}, s), a);
  }, {
    isMounted: false,
    isPlaying: false
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      isMounted = _useReducer2$.isMounted,
      isPlaying = _useReducer2$.isPlaying,
      setVideoState = _useReducer2[1];

  var playerConfig = (0, _react.useMemo)(function () {
    return _objectSpread(_objectSpread({}, defaultPlayerConfig), configProps);
  }, [configProps]);
  (0, _react.useEffect)(function () {
    if (isMounted) {
      setVideoState({
        isPlaying: inView && !pause
      });
    }
  }, [inView, pause, isMounted, isPlaying]);
  var handleBannerClick = (0, _react.useCallback)(function () {
    setMediaState({
      isSoundOn: !isSoundOn
    });
  }, [isSoundOn, setMediaState]);

  var handleReady = function handleReady() {
    setVideoState({
      isMounted: true
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_styledComponents.VideoBannerContainer, _extends({
    onClick: handleBannerClick,
    ref: ref,
    bgcolor: bgcolor
  }, containerProps), /*#__PURE__*/_react["default"].createElement(_styledComponents.BlockingShell, {
    bgcolor: bgcolor
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Background, null, /*#__PURE__*/_react["default"].createElement(_reactPlayer["default"], _extends({
    "class": "react-player",
    url: contentURL,
    width: "177.77777778vh"
    /* stretch video to size 16:9 -> 100 * 16 / 9 */
    ,
    height: "100%",
    muted: !isSoundOn,
    volume: isSoundOn ? 1 : 0,
    playing: isMounted ? isPlaying : false,
    config: playerConfig,
    onPlay: function onPlay() {
      return setVideoState({
        isPlaying: true
      });
    },
    onPause: function onPause() {
      return setVideoState({
        isPlaying: false
      });
    },
    onReady: handleReady,
    controls: false,
    playsinline: true,
    loop: true
  }, playerProps))), /*#__PURE__*/_react["default"].createElement(_styledComponents.VideoContentContainer, null, children));
}

VideoBanner.propTypes = {
  contentURL: _propTypes["default"].string.isRequired,
  pause: _propTypes["default"].bool,
  bgcolor: _propTypes["default"].string,
  configProps: _propTypes["default"].object,
  playerProps: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
};
VideoBanner.defaultProps = {
  pause: false,
  bgcolor: 'common.black',
  configProps: {},
  playerProps: {}
};

var Memo = /*#__PURE__*/_react["default"].memo(VideoBanner);

exports.VideoBanner = Memo;