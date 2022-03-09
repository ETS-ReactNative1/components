"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Slider: true
};
exports.Slider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _uuid = require("uuid");

var _prevIcon = require("./prev-icon");

var _nextIcon = require("./next-icon");

var _helpers = require("./helpers");

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

require("./styles/slick.css");

require("./styles/slick-theme.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Slider = function Slider(_ref) {
  var responsive = _ref.responsive,
      arrowColor = _ref.arrowColor,
      children = _ref.children,
      scrollable = _ref.scrollable,
      customRef = _ref.customRef,
      infinite = _ref.infinite,
      spacing = _ref.spacing,
      otherProps = _objectWithoutProperties(_ref, ["responsive", "arrowColor", "children", "scrollable", "customRef", "infinite", "spacing"]);

  var innerRef = (0, _react.useRef)(null);
  var ref = (0, _react.useMemo)(function () {
    return customRef ? customRef : innerRef;
  }, [customRef]);
  var theme = (0, _styles.useTheme)();

  var _useState = (0, _react.useState)("slider-".concat((0, _uuid.v4)())),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var handleWheel = (0, _react.useCallback)(function (event) {
    var deltaX = event.deltaX,
        deltaY = event.deltaY;

    if (!ref.current || (0, _helpers.isVerticalScroll)(deltaX, deltaY)) {
      return;
    }

    event.preventDefault();

    if (deltaX < 0) {
      ref.current.slickPrev();
    } else {
      ref.current.slickNext();
    }
  }, [ref]);
  (0, _react.useEffect)(function () {
    var slider = document.getElementById(id);

    if (scrollable && slider) {
      slider.addEventListener('wheel', handleWheel);
    }

    return function () {
      if (slider) {
        slider.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scrollable, id, handleWheel]);
  var materialResponsive = (0, _react.useMemo)(function () {
    return Object.keys(responsive).reduce(function (res, key) {
      var _theme$breakpoints$wi;

      return [].concat(_toConsumableArray(res), [{
        breakpoint: (_theme$breakpoints$wi = theme.breakpoints.width(key)) !== null && _theme$breakpoints$wi !== void 0 ? _theme$breakpoints$wi : Number(key),
        settings: _objectSpread(_objectSpread({}, responsive[key]), {}, {
          infinite: infinite ? (responsive === null || responsive === void 0 ? void 0 : responsive[key].slidesToShow) && _react["default"].Children.count(children) >= responsive[key].slidesToShow : false
        })
      }]);
    }, []);
  }, [responsive, theme.breakpoints, infinite, children]);
  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    id: id
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledSlickSlider, _extends({
    ref: ref,
    responsive: materialResponsive,
    prevArrow: /*#__PURE__*/_react["default"].createElement(_prevIcon.PrevIcon, {
      arrowColor: arrowColor
    }),
    nextArrow: /*#__PURE__*/_react["default"].createElement(_nextIcon.NextIcon, {
      arrowColor: arrowColor
    }),
    spacing: spacing
  }, otherProps), children));
};

Slider.propTypes = {
  responsive: _propTypes["default"].object,
  arrowColor: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,
  scrollable: _propTypes["default"].bool,
  lazyLoad: _propTypes["default"].oneOf(['ondemand', 'progressive']),
  customRef: _propTypes["default"].shape({
    current: _propTypes["default"].object
  }),
  infinite: _propTypes["default"].bool,
  spacing: _propTypes["default"].string
};
Slider.defaultProps = {
  responsive: {},
  arrowColor: 'text.primary',
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  scrollable: true,
  lazyLoad: 'ondemand',
  infinite: false,
  spacing: '0px'
};

var Memo = /*#__PURE__*/_react["default"].memo(Slider);

exports.Slider = Memo;