import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import AuthorsSection from './components/AuthorsSection';
import PopularBooks from './components/PopularBooks';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="ml-64">
        <HeroBanner />
        <AuthorsSection />
        <PopularBooks />
      </div>
    </div>
  );
}

export default App;
