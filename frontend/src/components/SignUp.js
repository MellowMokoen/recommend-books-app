import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Registration successful', data);
      // Redirect to login after successful registration
      navigate('/login');
    } else {
      console.error('Registration failed');
      // Handle registration error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-black text-white py-2 px-4 rounded">
            Sign Up
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/login')} 
            className="bg-gray-500 text-white py-2 px-4 rounded ml-4">
            Go to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
