import React, { useEffect, useState } from 'react';

const FavoriteBooks = () => {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites on component mount
  useEffect(() => {
    fetch('http://localhost:5000/api/favorites/1') // Assuming user_id 1 for simplicity
      .then(response => response.json())
      .then(data => setFavorites(data))
      .catch(error => console.error('Error fetching favorites:', error));
  }, []);
  

  const handleRemoveFavorite = (book_id) => {
    fetch(`http://localhost:5000/api/favorites/${book_id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setFavorites(favorites.filter(book => book.id !== book_id)); // Update favorites after removal
        } else {
          console.error('Error removing favorite');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold text-nude mb-10">My Favorite Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {favorites.map((book) => (
          <div key={book.id} className="bg-white p-3 mx-4 rounded-lg shadow-md">
            <div className="flex justify-center">
              <img
                src={book.cover_image || 'http://localhost:5000/uploads/placeholder.jpg'}
                alt={book.title}
                className="w-50 h-40 object-cover mb-4"
              />
            </div>
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p>{book.author}</p>
            <button
              onClick={() => handleRemoveFavorite(book.id)}
              className="mt-2 bg-nude text-white py-1 px-2 shadow-lg rounded-full"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoriteBooks;
