"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarketReports = getMarketReports;

function getMarketReports(api) {
  return api('/market_reports');
}