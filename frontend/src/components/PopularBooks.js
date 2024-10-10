import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetching data from Google Books API
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=bestsellers')
      .then((response) => {
        const bookData = response.data.items.map((item) => ({
          title: item.volumeInfo.title,
          rating: item.volumeInfo.averageRating || 'No rating',
          image: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150', // fallback if no image
          authors: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
        }));
        setBooks(bookData);
      })
      .catch((error) => {
        console.error('Error fetching data from Google Books API', error);
      });
  }, []);

  return (
    <section className="my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Popular Books</h2>
      <div className="grid grid-cols-4 gap-4">
        {books.map((book, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-sm">Rating: {book.rating}</p>
            <p className="text-sm">Author(s): {book.authors}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
