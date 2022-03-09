"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListings = getListings;
exports.getListing = getListing;
exports.getListingBuilding = getListingBuilding;

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getListings(api, query) {
  return api("/listings?".concat(_querystring["default"].stringify(query)));
}

function getListing(api, id) {
  return api("/listings?id=".concat(id));
}

function getListingBuilding(api, buildingId) {
  return api("/listing_details?building_id=".concat(buildingId));
}