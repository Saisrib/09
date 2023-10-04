import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ bookId }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the review to the server
    axios.post(`/api/books/${bookId}/reviews`, { review })
      .then((response) => {
        // Handle success or update the UI
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h3>Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
