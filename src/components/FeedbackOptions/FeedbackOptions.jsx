import React from 'react';

const FeedbackOptions = ({
  onHandleIncrementGood,
  onHandleIncrementNeutral,
  onHandleIncrementBad,
  onLeaveFeedback,
}) => (
  <div>
    <button type="button" onClick={onHandleIncrementGood}>
      Good
    </button>
    <button type="button" onClick={onHandleIncrementNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onHandleIncrementBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
