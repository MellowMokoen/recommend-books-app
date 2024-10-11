import React, { useEffect, useState } from 'react';

const PopularBooks = () => {
  const [books, setBooks] = useState([]);

  // Fetch book data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <section className="my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Popular Books</h2>
      <div className="grid grid-cols-4 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={book.cover_image}  // Assuming you have a 'cover_image' column
              alt={book.title}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-sm">Published: {book.published_date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
