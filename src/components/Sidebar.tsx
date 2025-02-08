import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <motion.div 
      className="h-screen w-64 bg-black text-white fixed flex flex-col items-center py-10 shadow-lg"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full border-4 border-primary" />
      <h1 className="text-xl font-bold mt-4">Joel Dibdib</h1>
      <p className="text-sm text-primary">Full-Stack Developer</p>

      <div className="flex space-x-4 mt-6">
        <FaFacebookF className="text-white hover:text-primary cursor-pointer" />
        <FaTwitter className="text-white hover:text-primary cursor-pointer" />
        <FaLinkedinIn className="text-white hover:text-primary cursor-pointer" />
        <FaGithub className="text-white hover:text-primary cursor-pointer" />
      </div>

      <nav className="mt-8 space-y-4 text-lg">
        <a href="#" className="block hover:text-primary">About</a>
        <a href="#" className="block hover:text-primary">Services</a>
        <a href="#" className="block hover:text-primary">Projects</a>
        <a href="#" className="block hover:text-primary">Contact</a>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
