import PropTypes from 'prop-types';
import Notification from '../Notification';
import { Item } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total !== 0 ? (
    <>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positivePercentage}%</Item>
    </>
  ) : (
    <Item>
      <Notification message="There is no feedback" />
    </Item>
  );

export default Statistics;

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
