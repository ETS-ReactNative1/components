"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgentSchema = AgentSchema;

function AgentSchema(_ref) {
  var name = _ref.name,
      email = _ref.email,
      phone = _ref.phone,
      image = _ref.image;
  return {
    '@context': 'https://schema.org/',
    '@type': 'RealEstateAgent',
    name: name,
    email: email,
    telephone: phone,
    image: image !== null && image !== void 0 ? image : null
  };
}