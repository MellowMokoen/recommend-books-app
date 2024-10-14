import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    number: false,
    specialChar: false,
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const checkPasswordStrength = (password) => {
    setPasswordRequirements({
      length: password.length >= 8,
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setCredentials({ ...credentials, password: newPassword });
    checkPasswordStrength(newPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Registration successful', data);
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
    } else {
      const errorData = await response.json();
      setMessage(errorData.error || 'Registration failed. Please try again.');
    }
  };



  return (
    <div className="flex justify-center items-center h-screen">
   
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-1/3">
      {message && <p className="text-green-500 mb-4">{message}</p>}
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={credentials.password}
            onChange={handlePasswordChange}
            className="border rounded-full w-full py-2 px-3 focus:outline-none shadow-md"
            required
          />
         <button type="button" className='mt-2 mb-2 bg-black text-white rounded-full p-1 text-xs' onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
         </button>
        </div>

        <div className="mt-2">
            <p>Password must meet the following requirements:</p>
            <ul className='mt-4 mb-6'>
              <li className={passwordRequirements.length ? 'text-green-500' : 'text-red-500'}>
                {passwordRequirements.length ? '✔️' : '❌'} At least 8 characters
              </li>
              <li className={passwordRequirements.number ? 'text-green-500' : 'text-red-500'}>
                {passwordRequirements.number ? '✔️' : '❌'} At least one number
              </li>
              <li className={passwordRequirements.specialChar ? 'text-green-500' : 'text-red-500'}>
                {passwordRequirements.specialChar ? '✔️' : '❌'} At least one special character
              </li>
            </ul>
          </div>
        
        <div className="flex justify-between">
        <button type="submit" className="bg-nude text-black py-2 px-4 rounded-full" disabled={!Object.values(passwordRequirements).every(Boolean)}>
            Sign Up
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/login')} 
            className="bg-gray-500 text-white py-2 px-4 rounded-full ml-4">
            Go to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
