import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-2">Let's work together!</p>
      
      <form className="mt-6 flex flex-col space-y-4 w-80">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 border border-gray-600" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 border border-gray-600" />
        <textarea placeholder="Your Message" className="p-3 rounded bg-gray-800 border border-gray-600 h-32"></textarea>
        <motion.button 
          className="p-3 bg-blue-500 hover:bg-blue-600 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
