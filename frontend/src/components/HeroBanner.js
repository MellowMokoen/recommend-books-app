import React, { useState } from 'react';

const HeroBanner = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <section className="bg-nude h-96 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-white mb-4">New Released Books</h1>
      
    </section>
  );
};

export default HeroBanner;
