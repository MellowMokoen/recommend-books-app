import React from 'react';
import logo from '../images/logo.png';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black text-white fixed flex flex-col justify-between p-6">
      {/* Logo */}
      <div className="text-center mb-8">
        <img src={logo} alt="Mel-read" className="h-16 mx-auto mb-4" />
       
      </div>

      {/* Sidebar Links */}
      <nav className="flex-grow">
        <ul>
          <li className="mb-4">
            <a href="#" className="block py-2 px-4 rounded-lg hover:bg-nude">Home</a>
          </li>
          <li className="relative mb-4">
            <button className="block w-full text-left py-2 px-4 rounded-lg hover:bg-nude">
              Category
            </button>
            <ul className="ml-4 mt-2">
              <li className="hover:bg-nude p-2 rounded">Romance</li>
              <li className="hover:bg-nude p-2 rounded">Drama</li>
              <li className="hover:bg-nude p-2 rounded">History</li>
              <li className="hover:bg-nude p-2 rounded">Educational</li>
              <li className="hover:bg-nude p-2 rounded">Self-development</li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
