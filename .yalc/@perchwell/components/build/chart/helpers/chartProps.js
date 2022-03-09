"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChartResponsiveProps = getChartResponsiveProps;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getChartResponsiveProps() {
  var isMobileView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var base = {
    cartesianGridProps: {
      stroke: '#CDD1D9',
      strokeDasharray: '5 5',
      vertical: false
    },
    referenceLineProps: {
      stroke: '#CDD1D9',
      y: 0
    },
    lineProps: {
      strokeWidth: 5,
      type: 'linear',
      stroke: '#30C392',
      dot: false
    }
  };

  if (isMobileView) {
    return _objectSpread({
      chartProps: {
        margin: {
          right: 10,
          left: 0
        }
      },
      xAxisProps: {
        axisLine: false,
        tickLine: false,
        tickMargin: 5,
        interval: 0,
        padding: {
          left: 10
        }
      },
      yAxisProps: {
        axisLine: false,
        tickLine: false,
        tickCount: 10,
        tickMargin: 25
      }
    }, base);
  }

  return _objectSpread({
    chartProps: {
      margin: {
        right: 20,
        left: 0
      }
    },
    xAxisProps: {
      axisLine: false,
      tickLine: false,
      tickMargin: 10,
      padding: {
        left: 10
      }
    },
    yAxisProps: {
      axisLine: false,
      tickLine: false,
      tickCount: 5,
      tickMargin: 50
    }
  }, base);
}