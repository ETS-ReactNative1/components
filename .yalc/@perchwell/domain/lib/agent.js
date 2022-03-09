import PropTypes from 'prop-types';

export const AgentType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  image_urls: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
  social: PropTypes.shape({
    twitter_url: PropTypes.string,
    youtube_url: PropTypes.string,
    facebook_url: PropTypes.string,
    linkedin_url: PropTypes.string,
    instagram_url: PropTypes.string,
  }),
  overview_item_list: PropTypes.shape({
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
      }),
    ),
  }),
});
