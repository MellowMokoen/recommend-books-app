import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import PopularBooks from './components/PopularBooks';
import CoverPage from './components/CoverPage';
import Login from './components/LogIn';
import SignUp from './components/SignUp'; 
import AboutUs from './components/AboutUs';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const location = useLocation(); // Use this here in App component
  const shouldShowSidebar = !['/', '/login', '/signup'].includes(location.pathname);


  return (
      <div className="App">
      {shouldShowSidebar && <Sidebar onCategorySelect={handleCategorySelect} />}
      <div className={shouldShowSidebar ? 'ml-64' : ''}>
          <Routes>
          <Route path="/" element={<CoverPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/home" element={
              <>
                <HeroBanner />
                <PopularBooks selectedCategory={selectedCategory} />
              </>
            } />
          </Routes>
        </div>
      </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}