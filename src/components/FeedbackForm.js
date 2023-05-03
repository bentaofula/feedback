import React, { useState } from 'react';
import Rating from './Rating';
import Comment from './comment';
import SubmitButton from './submitButton';
import ThankYou from './ThankYou';

const FeedbackForm = () => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const handleSubmit = () => {
    // Submit feedback to server
    setSubmitted(true);
  };

  if (submitted) {
    return <ThankYou />;
  }

  return (
    <div>
      <h1>Feedback Form</h1>
      <Rating rating={rating} onRatingChange={handleRatingChange} />
      <Comment comment={comment} onCommentChange={handleCommentChange} />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default FeedbackForm;
