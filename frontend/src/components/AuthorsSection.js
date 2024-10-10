import React, { useState } from 'react';

const authorsData = [
  { name: 'Author 1', books: ['Book A', 'Book B'] },
  { name: 'Author 2', books: ['Book C', 'Book D'] },
];

const AuthorsSection = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  return (
    <section className="my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Popular Authors</h2>
      <div className="flex space-x-8">
        {authorsData.map((author, index) => (
          <button
            key={index}
            className="hover:text-nude"
            onClick={() => setSelectedAuthor(author)}
          >
            {author.name}
          </button>
        ))}
      </div>

      {selectedAuthor && (
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{selectedAuthor.name}'s Books</h3>
          <ul>
            {selectedAuthor.books.map((book, idx) => (
              <li key={idx} className="text-lg">{book}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default AuthorsSection;
