import React from 'react';
import background3 from '../images/background3.jpg'; 

const HeroBanner = () => {
  return (
    <section 
      className="h-56 md:h-80 flex flex-col justify-center items-center text-center relative p-4" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${background3})`, 
          filter: 'blur(3px) brightness(0.7)', 
          zIndex: -1 
        }}
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 relative z-10">New Released Books</h1>
      <p className='text-xs sm:text-sm text-white'>Need some next read recommendations? Keep track of what's new in the book market - made easy for all time readers.</p>
    </section>
  );
};

export default HeroBanner;
