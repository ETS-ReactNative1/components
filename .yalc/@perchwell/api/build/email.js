"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = sendEmail;

function sendEmail(api, data) {
  return api("/email", {
    data: data
  });
}