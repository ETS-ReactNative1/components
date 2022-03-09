"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageConfiguration = getPageConfiguration;

var _utils = require("@perchwell/utils");

function getPageConfiguration(api, pageId) {
  return api("/page_configuration/".concat(pageId)).then(function (pageConfig) {
    var _pageConfig$data$page, _pageConfig$data, _pageConfig$data$page2;

    var data = (_pageConfig$data$page = pageConfig === null || pageConfig === void 0 ? void 0 : (_pageConfig$data = pageConfig.data) === null || _pageConfig$data === void 0 ? void 0 : (_pageConfig$data$page2 = _pageConfig$data.pages) === null || _pageConfig$data$page2 === void 0 ? void 0 : _pageConfig$data$page2[0]) !== null && _pageConfig$data$page !== void 0 ? _pageConfig$data$page : [];
    return (0, _utils.normalizeData)(data);
  });
}