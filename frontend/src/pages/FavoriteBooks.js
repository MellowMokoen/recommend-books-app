import React, { useEffect, useState } from 'react';

const FavoriteBooks = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/favorites/1') // assuming user_id 1 for simplicity
      .then(response => response.json())
      .then(data => setFavorites(data))
      .catch(error => console.error('Error fetching favorites:', error));
  }, []);

  return (
    <section className="my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Your Favorite Books</h2>
      <div className="grid grid-cols-4 gap-8">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoriteBooks;
