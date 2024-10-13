import React, { useState } from 'react';

const Rating = ({ book_id, user_id }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

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
        setMessage('Error submitting rating. Please try again.');
        setMessageType('error'); // Set message type to error
        throw new Error('Failed to submit rating');
      }
      setMessage('Rating submitted successfully!');
      setMessageType('success');
    } catch (error) {
      
    }
  };

  return (
    <div>
      <h3 className='mt-6 font-bold'>Leave your rating:</h3>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span 
            key={value} 
            onClick={() => handleRating(value)} 
            style={{ cursor: 'pointer', color: value <= rating ? 'gold' : 'gray' }}
          >
            ★
          </span>
        ))}
      </div>
      {message && (
        <p style={{ color: messageType === 'success' ? 'green' : 'red' }}>
          {message}
        </p>
      )}

    </div>
  );
};

export default Rating;
