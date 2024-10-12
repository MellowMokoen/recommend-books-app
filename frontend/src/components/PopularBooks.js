import React, { useEffect, useState } from 'react';

const PopularBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
        setFilteredBooks(data); // Initialize filteredBooks with all books
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleReadMore = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
    setFilteredBooks(filtered);
  };

  return (
    <section className="my-8 p-4">
    <div className="flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl font-bold mb-4">Find Your Next Favorite Book</h2>
      <input
        type="text"
        placeholder="Search for books or authors..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-2/3 p-3 rounded-lg shadow-lg text-brown mb-16 p-2 border border-gray-300 rounded"
      />
    </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img
                src={book.cover_image || 'http://localhost:5000/uploads/placeholder.jpg'}
                alt={book.title}
                className="w-50 h-40 object-cover mb-4"
              />
            </div>
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-sm">Published: {book.published_date}</p>
            <button
              onClick={() => handleReadMore(book)}
              className="mt-2 bg-nude text-black py-1 px-2 rounded"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/3">
            <span className="cursor-pointer" onClick={closeModal}>&times;</span>
            <h2>{selectedBook.title}</h2>
            <p>Author: {selectedBook.author}</p>
            <p>Category: {selectedBook.category}</p>
            <p>Published Date: {selectedBook.published_date}</p>
            <img src={selectedBook.cover_image} alt={selectedBook.title} className="w-50 h-40 object-cover mb-4" />
            <p>Description here...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularBooks;
