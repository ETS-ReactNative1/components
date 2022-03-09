"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTeam = getTeam;

function getTeam(api, id) {
  return api("/teams/".concat(id));
}