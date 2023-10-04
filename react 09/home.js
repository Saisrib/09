import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function Home() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch and display books based on the search query
    axios.get(`/api/books?search=${searchQuery}`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Books"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a href={`/book/${book.id}`}>{book.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
