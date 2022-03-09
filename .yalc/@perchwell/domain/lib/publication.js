import PropTypes from 'prop-types';

export const PublicationType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  image_urls: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  news_source: PropTypes.string.isRequired,
  client_website_employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      image_urls: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  client_website_neighborhoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  publicatin_date: PropTypes.string,
  body: PropTypes.string,
  tags: PropTypes.object,
});
