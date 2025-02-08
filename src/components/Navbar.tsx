import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Joel Dibdib</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
