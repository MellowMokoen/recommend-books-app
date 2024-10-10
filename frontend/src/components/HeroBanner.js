import React from 'react';

const HeroBanner = () => {
  return (
    <section className="bg-nude h-96 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Find Your Next Favorite Book</h1>
      <input
        type="text"
        placeholder="Search for books or authors..."
        className="w-2/3 p-3 rounded-lg text-brown"
      />
    </section>
  );
};

export default HeroBanner;
