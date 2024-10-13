import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../images/logo.png'; 

function CoverPage() {
  const navigate = useNavigate();

  return (
    <div className="cover-page h-screen flex flex-col items-center justify-center bg-nude">
      {/* Animated Logo */}
      <motion.img 
        src={logo} 
        alt="App Logo" 
        className="w-48 h-48"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Welcome Message */}
      <motion.h1
        className="text-4xl mt-6 text-white"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Welcome to [App Name]
      </motion.h1>

      {/* Navigate to Login/Signup Button */}
      <motion.button
        className="mt-12 p-3 bg-white text-black rounded-lg shadow-lg"
        onClick={() => navigate('/login')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        Get Started
      </motion.button>
    </div>
  );
}

export default CoverPage;
