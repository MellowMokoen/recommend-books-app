import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading animation when the request starts

    // Simulating a small delay before checking the credentials
    setTimeout(async () => {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

    setLoading(false); // Hide loading animation when the request is done

    if (response.ok) {
      const data = await response.json();
      console.log('Login successful', data);
      // Handle successful login (e.g., store token, redirect)
      navigate('/home');
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message); // Display error message
    }
  }, 1000); // Simulate a 1-second delay
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Loading spinner */}
        {loading && (
          <div className="flex justify-center mb-4">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-transparent rounded-full" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
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
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
            required
          />
        </div>
        <button type="submit" className="bg-nude text-black py-2 px-4 rounded-full">
          Login
        </button>
        <p className="text-sm text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="rounded-full bg-nude text-black py-2 px-4">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
