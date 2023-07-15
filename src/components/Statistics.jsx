
import React from 'react';
import { FeedbackContainer } from './Feedback.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <FeedbackContainer>
    
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  </FeedbackContainer>
);

export default Statistics;
