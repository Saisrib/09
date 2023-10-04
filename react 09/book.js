import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewForm from './review';

function Book(props) {
  const [book, setBook] = useState({});
  const bookId = props.match.params.id;

  useEffect(() => {
    // Fetch book details based on the bookId
    axios.get(`/api/books/${bookId}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error(error));
  }, [bookId]);

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <ReviewForm bookId={bookId} />
    </div>
  );
}

export default Book;
