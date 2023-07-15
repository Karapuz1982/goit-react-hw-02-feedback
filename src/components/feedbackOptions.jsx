
import React from 'react';
import { Button, FeedbackContainer } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackContainer>
    
    {options.map((option) => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </FeedbackContainer>
);

export default FeedbackOptions;
