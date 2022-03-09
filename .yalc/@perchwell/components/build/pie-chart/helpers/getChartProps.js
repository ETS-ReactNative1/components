"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChartResponsiveProps = getChartResponsiveProps;

function getChartResponsiveProps() {
  var isMobileView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (isMobileView) {
    return {
      chartProps: {
        width: 280,
        height: 280,
        viewBox: '0 0 450 280'
      },
      pieProps: {
        outerRadius: 140,
        innerRadius: 90,
        width: 280,
        height: 280
      }
    };
  }

  return {
    chartProps: {
      margin: {
        right: 20,
        left: 10
      },
      width: 300,
      height: 300
    },
    pieProps: {
      outerRadius: 140,
      innerRadius: 80,
      width: 300,
      height: 300
    }
  };
}