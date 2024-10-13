import React from 'react';
import background2 from '../images/background2.jpg'; 

const HeroBanner = () => {
  return (
    <section 
      className="h-80 flex flex-col justify-center items-center text-center" 
      style={{ 
        backgroundImage: `url(${background2})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl font-bold text-white mb-4">New Released Books</h1>
    </section>
  );
};

export default HeroBanner;
