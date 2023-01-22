import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <>{message}</>;
};
export default Notification;

Notification.PropTypes = {
  message: PropTypes.string.isRequired,
};
