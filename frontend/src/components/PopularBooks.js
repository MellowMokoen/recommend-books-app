import React, { useEffect, useState } from 'react';
import Rating from './Rating';

const PopularBooks = ({ selectedCategory, onSearchReset }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [addedToFavorites, setAddedToFavorites] = useState(new Set()); 

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
        setFilteredBooks(data); // Initialize filteredBooks with all books
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase());
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books);
    }
  }, [selectedCategory, books]);

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

  const resetSearch = () => {
    setSearchTerm('');
    setFilteredBooks(books); // Reset to all books
    onSearchReset(''); // Notify parent to reset search
  };

  useEffect(() => {
    // Fetch favorites on mount
    fetch('http://localhost:5000/api/favorites/1') // Assuming user_id 1 for simplicity
      .then(response => response.json())
      .then(data => {
        setFavorites(data);
        const favoritesSet = new Set(data.map(book => book.id)); // Create a Set of favorite book IDs
        setAddedToFavorites(favoritesSet); // Update the addedToFavorites state
      })
      .catch(error => console.error('Error fetching favorites:', error));
  }, []);

  const handleAddToFavorites = (book) => {
    if (!addedToFavorites.has(book.id)) { // Check if the book is already in favorites
      fetch('http://localhost:5000/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: 1, book_id: book.id }) // assuming user_id 1 for simplicity
      })
      .then(response => response.json())
      .then(data => {
        setFavorites(prev => [...prev, book]); // Update favorites
        setAddedToFavorites(prev => new Set(prev).add(book.id)); // Add to favorites Set
        alert('Added to favorites');
      })
      .catch(error => console.error('Error adding to favorites:', error));
    } else {
      alert('This book is already in your favorites!');
    }
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
        className="w-2/3 p-3 rounded-lg shadow-lg text-black mb-24 border-none focus:outline-none"
      />
    </div>
      <div className="grid grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white p-3 mx-4 rounded-lg shadow-md">
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
              className="mt-2 bg-nude text-black py-1 px-2 shadow-lg rounded-full"
            >
              Read More
            </button>

            {addedToFavorites.has(book.id) ? ( // Check if book is added
              <span className="mt-2 mx-2 text-sm text-green-500">Added to Favorites</span>
            ) : (
              <button
                onClick={() => handleAddToFavorites(book)}
                className="mt-2 ml-2 text-red-500"
              >
                ♥
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedBook && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-nude text-black p-4 rounded shadow-xl w-1/2 flex flex-col">
      <div className="flex">
      <span className="cursor-pointer mr-6 text-black font-bold text-2xl" onClick={closeModal}>&times;</span>
        <img src={selectedBook.cover_image} alt={selectedBook.title} className="w-1/4 h-auto object-cover mr-4 border-2 border-black shadow-lg rounded" />
        <div className="flex flex-col">
        <h2 className="font-semibold">Title: <span className="text-xl font-bold">{selectedBook.title}</span></h2>
          <p className="font-semibold">Author: <span className="font-normal">{selectedBook.author}</span></p>
          <p className="font-semibold">Category: <span className="font-normal">{selectedBook.category}</span></p>
          <p className="font-semibold">Published Year: <span className="font-normal">{selectedBook.published_year}</span></p>
          <p className="font-semibold">
            Rating: <span className="font-normal">{selectedBook.rating} stars ★ ({selectedBook.rating_count})</span>
          </p>
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
