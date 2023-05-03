import React from 'react';

const Rating = ({ rating, onRatingChange }) => {
  const ratingValues = [1, 2, 3, 4, 5];
  
  return (
    <div>
      {ratingValues.map((value) => (
        <label key={value}>
          <input type="radio" name="rating" value={value} checked={rating === value} onChange={() => onRatingChange(value)} />
          {value}
        </label>
      ))}
    </div>
  );
};

export default Rating;
