import React from 'react';
import book1 from '../images/book1.webp';
import book2 from '../images/book2.webp';

const popularBooks = [
  { title: 'Book A', rating: '4.5', image: book1 },
  { title: 'Book B', rating: '4.0', image: book2 },
];

const PopularBooks = () => {
  return (
    <section className="my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Popular Books</h2>
      <div className="grid grid-cols-4 gap-4">
        {popularBooks.map((book, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-sm">Rating: {book.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
