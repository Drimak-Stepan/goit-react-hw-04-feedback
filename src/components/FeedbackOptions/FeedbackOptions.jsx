import PropTypes from 'prop-types';
import { Description, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(name => (
    <Description key={name}>
      <Btn type="button" onClick={() => onLeaveFeedback(name)}>
        {name}
      </Btn>
    </Description>
  ));
  return <>{elements}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
