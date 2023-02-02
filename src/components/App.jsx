import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = feedback.good + feedback.neutral + feedback.bad;

  const calcPositivePercentage = name => {
    if (!total) {
      return 0;
    }
    const value = feedback[name];
    const result = ((value / total) * 100).toFixed();
    return Number(result);
  };

  const positivePercentage = calcPositivePercentage('good');

  const onLeaveFeedback = name => {
    setFeedback(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {' '}
        {total !== 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
