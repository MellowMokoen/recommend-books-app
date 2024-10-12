import React, { useState } from 'react';

const HeroBanner = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <section className="bg-nude h-96 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Find Your Next Favorite Book</h1>
      <input
        type="text"
        placeholder="Search for books or authors..."
        className="w-2/3 p-3 rounded-lg text-brown mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white py-2 px-4 rounded"
      >
        Search
      </button>
    </section>
  );
};

export default HeroBanner;
