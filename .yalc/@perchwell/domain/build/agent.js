"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgentType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AgentType = _propTypes["default"].shape({
  id: _propTypes["default"].number.isRequired,
  first_name: _propTypes["default"].string.isRequired,
  last_name: _propTypes["default"].string.isRequired,
  image_urls: _propTypes["default"].arrayOf(_propTypes["default"].string),
  title: _propTypes["default"].string,
  phone: _propTypes["default"].string,
  email: _propTypes["default"].string,
  bio: _propTypes["default"].string,
  social: _propTypes["default"].shape({
    twitter_url: _propTypes["default"].string,
    youtube_url: _propTypes["default"].string,
    facebook_url: _propTypes["default"].string,
    linkedin_url: _propTypes["default"].string,
    instagram_url: _propTypes["default"].string
  }),
  overview_item_list: _propTypes["default"].shape({
    content: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      title: _propTypes["default"].string,
      subtitle: _propTypes["default"].string
    }))
  })
});

exports.AgentType = AgentType;