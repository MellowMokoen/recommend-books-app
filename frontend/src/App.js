import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import PopularBooks from './components/PopularBooks';
import CoverPage from './pages/CoverPage';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp'; 
import AboutUs from './pages/AboutUs';
import Favorites from './pages/FavoriteBooks';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchReset = () => {
    console.log("Search reset"); 
  };

  const location = useLocation(); 
  const shouldShowSidebar = !['/', '/login', '/signup'].includes(location.pathname);


  return (
      <div className="App">
    
    {shouldShowSidebar && 
        <Sidebar 
          onCategorySelect={handleCategorySelect} 
          onSearchReset={handleSearchReset} 
        />}
  
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

           <Route path="/favorites" element={<Favorites />} />
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