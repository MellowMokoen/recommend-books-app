import React from 'react';
import background3 from '../images/background3.jpg';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
    
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background3})`,
          backgroundSize: 'cover',
          filter: 'blur(3px) brightness(0.7)',
        }}
      ></div>
      
      
      <div className="bg-black text-nude p-12 rounded-lg shadow-lg z-10">
        <h1 className="text-4xl mb-4 font-bold text-center">- About Us</h1>
        <p className="text-lg mb-12">
          At Mel-Read, we are passionate about connecting readers with the latest and greatest in literature. Our mission is to simplify the journey of discovering new books released from 2024 onwards, ensuring that readers can easily find captivating stories that resonate with them. We are committed to keeping our platform updated with fresh content, enabling you to explore a wide range of genres effortlessly.
        </p>
        
        <h2 className="text-3xl mb-4 font-bold text-center">- Our Vision</h2>
        <p className="text-lg">
          Our vision is to create a vibrant community of readers who can share their love for literature. We aspire to be the go-to platform for discovering not only new releases but also hidden gems in every genre. By continuously enhancing our services, we aim to empower readers and promote a lifelong love of reading.
        </p>
        <div className="follow-us mt-12">
          <h3 className="text-md mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/mellow_mokoena" target="_blank" rel="noopener noreferrer" className="text-nude hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@mellow_mokoena" target="_blank" rel="noopener noreferrer" className="text-nude hover:text-white">
              <FaTiktok size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mamello-mokoena-170744204/" target="_blank" rel="noopener noreferrer" className="text-nude hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
