import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../images/logo.png'; 
import background3 from '../images/background3.jpg';

function CoverPage() {
  const navigate = useNavigate();

  return (

    <div className="relative h-screen flex items-center justify-center">

    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${background3})`, backgroundSize: 'cover', filter: 'blur(4px) brightness(0.5)', zIndex: -1 }}
    ></div>
  
    <div className="relative z-10 flex flex-col items-center">
      
      <motion.h1
        className="text-4xl mt-6 text-white"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4 }}
      >
        Welcome, Book Lover!
      </motion.h1>
  
      <motion.img 
        src={logo} 
        alt="App Logo" 
        className="w-48 h-48"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }}
      />
  
      <motion.button
        className="mt-12 p-3 bg-nude text-black text-bold rounded-full shadow-xl"
        onClick={() => navigate('/login')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        Check new books out
      </motion.button>
    </div>
  </div>
  
  );
}

export default CoverPage;
