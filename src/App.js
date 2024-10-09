import React from 'react';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import AuthorsSection from './components/AuthorsSection';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="ml-64">
        <HeroBanner />
        <AuthorsSection />
       
      </div>
    </div>
  );
}

export default App;
