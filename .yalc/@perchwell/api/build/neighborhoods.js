"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNeighborhoods = getNeighborhoods;
exports.getNeighborhood = getNeighborhood;

function getNeighborhoods(api) {
  return api("/neighborhoods");
}

function getNeighborhood(api, id) {
  return api("/neighborhoods/".concat(id));
}