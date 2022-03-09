"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAgents = getAgents;
exports.getAgent = getAgent;

function getAgents(api) {
  return api("/agents");
}

function getAgent(api, id) {
  return api("/agent/".concat(id));
}