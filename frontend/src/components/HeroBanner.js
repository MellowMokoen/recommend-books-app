import React from 'react';
import background3 from '../images/background3.jpg'; 

const HeroBanner = () => {
  return (
    <section 
  className="h-80 flex flex-col justify-center items-center text-center relative" 
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
  <h1 className="text-5xl font-bold text-white mb-4 relative z-10">New Released Books</h1>
  <p className='text-sm text-white'>Need some next read recommendations? keep track of what's new in the book market- made easy for all time readers</p>
</section>


  );
};

export default HeroBanner;
