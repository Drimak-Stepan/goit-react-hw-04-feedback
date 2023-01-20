import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <>{message}</>;
};
export default Notification;

Notification.prototypes = {
  title: PropTypes.string.isRequired,
};
