import React, { useEffect, useState } from 'react';

const PopularBooks = () => {
  const [books, setBooks] = useState([]);

  // Fetch book data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBooks(data);
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <section className="my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Popular Books</h2>
      <div className="grid grid-cols-4 gap-4">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
  src={book.cover_image ? `http://localhost:5000/${book.cover_image}` : 'http://localhost:5000/uploads/placeholder.jpg'}
  alt={book.title || 'No Title Available'}
  className="w-full h-40 object-cover mb-4"
/>

              <h3 className="text-xl font-bold">{book.title || 'No Title Available'}</h3>
              <p className="text-sm">Published: {book.published_date || 'Unknown'}</p>
            </div>
          ))
        ) : (
          <p>No books available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default PopularBooks;
