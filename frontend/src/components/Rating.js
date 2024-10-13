import React, { useState } from 'react';

const Rating = ({ book_id, user_id }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleRating = async (value) => {
    setRating(value);
    console.log({ book_id, value });

    try {
        const response = await fetch(`http://localhost:5000/api/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ book_id, rating_value: value, user_id }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit rating');
      }
      setMessage('Rating submitted successfully!');
    } catch (error) {
      setMessage('Error submitting rating. Please try again.');
    }
  };

  return (
    <div>
      <h3>Rate this book:</h3>
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={() => handleRating(value)}>
          {value}
        </button>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Rating;
