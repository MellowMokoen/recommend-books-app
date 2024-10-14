import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png';

const Sidebar = ({ onCategorySelect, onSearchReset }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    onCategorySelect(''); // Reset the category
    onSearchReset(''); // Reset the search term
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    // Optionally dispatch a Redux action here
    // dispatch(logoutAction());
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
     
      <button
        className="md:hidden p-2"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <section
        className={`w-64 h-screen bg-black text-nude font-bold fixed flex flex-col justify-between p-6 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-nude"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          <FaTimes size={24} />
        </button>

        {/* Logo */}
        <div className="text-center mb-4">
          <img src={logo} alt="Mel-read" className="h-16 mx-auto mb-4" />
        </div>

        {/* Sidebar Links */}
        <nav className="flex-grow">
          <ul>
            <li className="mb-4">
              <Link
                to="/home"
                onClick={handleHomeClick}
                className="block py-2 px-4 rounded-full text-center bg-nude text-black hover:bg-white transition duration-200"
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <button
                className="block w-full text-center py-2 px-4 rounded-full bg-nude text-black hover:bg-white transition duration-200"
                onClick={() => navigate('/about')}
              >
                About us
              </button>
            </li>
            <li className="relative mb-4">
              <div className="block w-full text-center py-2 px-4 rounded-full bg-nude text-black">
                Category
              </div>
              <ul className="ml-4 mt-2">
                {['Romance', 'Drama', 'Thriller', 'Self-help', 'Fantasy'].map((category) => (
                  <li
                    key={category}
                    className="hover:bg-nude cursor-pointer hover:text-black p-2 mb-5 rounded-full transition duration-200"
                    onClick={() => onCategorySelect(category)}
                  >
                    🤍 {category}
                  </li>
                ))}
              </ul>
            </li>
            <li className="mb-4">
              <Link
                to="/favorites"
                className="block py-2 px-4 text-center rounded-full bg-nude text-black hover:bg-white transition duration-200"
              >
                My Favorites
              </Link>
            </li>
            <li className="mb-8">
              <button
                onClick={handleLogout}
                className="block w-full text-center py-2 px-4 rounded-full bg-nude text-black hover:bg-white transition duration-200"
              >
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </section>

    
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleSidebar} />}
    </div>
  );
};

export default Sidebar;
