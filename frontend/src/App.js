import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import PopularBooks from './components/PopularBooks';
import Login from './components/LogIn';
import SignUp from './components/SignUp'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="ml-64">
          <Routes>
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={
              <>
                <HeroBanner />
                <PopularBooks />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
