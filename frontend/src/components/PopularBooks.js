import React, { useEffect, useState } from 'react';
import Rating from './Rating';

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
        className="w-2/3 p-3 rounded-lg shadow-lg text-brown mb-24 p-2 border border-gray-300 rounded"
      />
    </div>
      <div className="grid grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white p-3 mx-4 rounded-lg shadow-lg">
            <div className="flex justify-center">
              <img
                src={book.cover_image || 'http://localhost:5000/uploads/placeholder.jpg'}
                alt={book.title}
                className="w-50 h-40 object-cover mb-4"
              />
            </div>
            <h3 className="text-xl font-bold">{book.title}</h3>
            
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
    <div className="bg-nude text-black p-4 rounded shadow-lg w-1/2 flex flex-col">
      <div className="flex">
      <span className="cursor-pointer mr-6 text-black font-bold text-2xl" onClick={closeModal}>&times;</span>
        <img src={selectedBook.cover_image} alt={selectedBook.title} className="w-1/4 h-auto object-cover mr-4 border-2 border-black shadow-lg rounded" />
        <div className="flex flex-col">
        <h2 className="text-xl font-bold">{selectedBook.title}</h2>
          <p className="font-semibold">Author: <span className="font-normal">{selectedBook.author}</span></p>
          <p className="font-semibold">Category: <span className="font-normal">{selectedBook.category}</span></p>
          <p className="font-semibold">Published Date: <span className="font-normal">{selectedBook.published_date}</span></p>
          <Rating book_id={selectedBook.id} />
          <p className="font-semibold mt-4">Overview:</p>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
      </div>
     
      
    </div>
  </div>
)}



    </section>
  );
};

export default PopularBooks;
