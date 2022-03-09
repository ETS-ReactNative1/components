"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useSafeDispatch(dispatch) {
  var mounted = _react["default"].useRef(false);

  _react["default"].useLayoutEffect(function () {
    mounted.current = true;
    return function () {
      return mounted.current = false;
    };
  }, []);

  return _react["default"].useCallback(function () {
    return mounted.current ? dispatch.apply(void 0, arguments) : void 0;
  }, [dispatch]);
}

var defaultInitialState = {
  status: 'idle',
  data: null,
  error: null
};

function useAsync(initialState) {
  var initialStateRef = _react["default"].useRef(_objectSpread(_objectSpread({}, defaultInitialState), initialState));

  var _React$useReducer = _react["default"].useReducer(function (s, a) {
    return _objectSpread(_objectSpread({}, s), a);
  }, initialStateRef.current),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      _React$useReducer2$ = _React$useReducer2[0],
      status = _React$useReducer2$.status,
      data = _React$useReducer2$.data,
      error = _React$useReducer2$.error,
      setState = _React$useReducer2[1];

  var safeSetState = useSafeDispatch(setState);

  var setData = _react["default"].useCallback(function (data) {
    return safeSetState({
      data: data,
      status: 'resolved'
    });
  }, [safeSetState]);

  var setError = _react["default"].useCallback(function (error) {
    return safeSetState({
      error: error,
      status: 'rejected'
    });
  }, [safeSetState]);

  var reset = _react["default"].useCallback(function () {
    return safeSetState(initialStateRef.current);
  }, [safeSetState]);

  var run = _react["default"].useCallback(function (promise) {
    if (!promise || !promise.then) {
      throw new Error("The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?");
    }

    safeSetState({
      status: 'pending'
    });
    return promise.then(function (data) {
      setData(data);
      return data;
    }, function (error) {
      setError(error);
      return Promise.reject(error);
    });
  }, [safeSetState, setData, setError]);

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',
    setData: setData,
    setError: setError,
    error: error,
    status: status,
    data: data,
    run: run,
    reset: reset
  };
}

var _default = useAsync;
exports["default"] = _default;