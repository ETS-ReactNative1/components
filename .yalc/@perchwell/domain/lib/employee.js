import PropTypes from 'prop-types';

export const EmployeeType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  employee_type: PropTypes.string.isRequired,
  image_urls: PropTypes.arrayOf(PropTypes.string),
});
