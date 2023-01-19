import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    console.log('hello');
  };
  countPositiveFeedbackPercentage = () => {};
  render() {
    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          onHandleIncrementGood={this.handleIncrementGood}
          onHandleIncrementNeutral={this.handleIncrementNeutral}
          onHandleIncrementBad={this.handleIncrementBad}
        />

        <Section title="Statistics" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default App;
