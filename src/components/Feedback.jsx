import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class FeedbackWidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = (type) => {
        this.setState((prevState) => ({
            [type]: prevState[type] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total === 0 ? 0 : Math.round((good / total) * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        const feedbackOptions = ['good', 'neutral', 'bad'];

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleFeedback} />
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedback}
                        positivePercentage={positiveFeedbackPercentage}
                        />
                            )}
                </Section>
            </div>
        );
    }
}


export default FeedbackWidget;
