import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-md px-6 py-4 flex justify-between items-center z-50"
    >
      {/* Logo */}
      <Link to="/" className="text-3xl font-extrabold text-gray-900">
        🌟 <span className="text-blue-600">Crowd</span>
        <span className="text-green-500">Fund</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link
          className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-lg font-semibold text-gray-900 hover:text-green-500 transition duration-300"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="bg-blue-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300"
          to="/register"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4 md:hidden"
        >
          <Link
            className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition duration-300"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-lg font-semibold text-gray-900 hover:text-green-500 transition duration-300"
            to="/login"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            className="bg-blue-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300 text-center"
            to="/register"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
