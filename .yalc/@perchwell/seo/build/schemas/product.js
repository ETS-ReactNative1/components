"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductSchema = ProductSchema;

function buildOffers(offers) {
  return {
    '@type': 'Offer',
    priceCurrency: offers.priceCurrency,
    price: offers.price
  };
}

function ProductSchema(_ref) {
  var name = _ref.name,
      description = _ref.description,
      image = _ref.image,
      offers = _ref.offers;
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: name,
    description: description !== null && description !== void 0 ? description : null,
    offers: offers ? Array.isArray(offers) ? offers.map(function (offer) {
      return buildOffers(offer);
    }) : buildOffers(offers) : null,
    image: image !== null && image !== void 0 ? image : null
  };
}