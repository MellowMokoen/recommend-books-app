import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Sidebar = ({ onCategorySelect, onSearchReset }) => {

  const handleHomeClick = () => {
    onCategorySelect(''); // Reset the category
    onSearchReset(''); // Reset the search term
  };

  return (
    <section className="w-64 h-screen bg-black text-nude font-bold fixed flex flex-col justify-between p-6">
      {/* Logo */}
      <div className="text-center mb-8">
        <img src={logo} alt="Mel-read" className="h-16 mx-auto mb-4" />
      </div>

      {/* Sidebar Links */}
      <nav className="flex-grow">
        <ul>
          <li className="mb-4">
            <Link to="/home" onClick={handleHomeClick} className="block py-2 px-2 rounded-full bg-nude text-black hover:bg-white">Home</Link>
          </li>
          <li className="mb-4">
          <button className="block w-full text-left py-2 px-2 rounded-full bg-nude text-black hover:bg-white">
              About us
            </button>
          </li>
          <li className="relative mb-4">
            <div className="block w-full text-left py-2 px-2 rounded-full bg-nude text-black hover:bg-white">
              Category
            </div>
            <ul className="ml-8 mt-2">
               {['Romance', 'Drama', 'Thriller', 'Self-help', 'Fantasy'].map((category) => (
              <li key={category} className="hover:bg-nude cursor-pointer hover:text-black p-2 rounded" onClick={() => onCategorySelect(category)}>
                🤍 {category} 
              </li>
                ))}
             </ul>

          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
