import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="ml-64 min-h-screen bg-dark text-white p-10">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      
      <p className="mt-4 text-lg text-gray-400">
        Passionate full-stack developer with expertise in creating modern web applications.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <motion.div className="p-6 bg-black rounded-lg shadow-md border border-gray-700"
          whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold text-primary">Development</h3>
          <p className="text-gray-400 mt-2">Building custom full-stack applications tailored to client needs.</p>
        </motion.div>

        <motion.div className="p-6 bg-black rounded-lg shadow-md border border-gray-700"
          whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold text-primary">SEO Optimization</h3>
          <p className="text-gray-400 mt-2">Enhancing website performance and visibility in search engines.</p>
        </motion.div>

        <motion.div className="p-6 bg-black rounded-lg shadow-md border border-gray-700"
          whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold text-primary">Database Management</h3>
          <p className="text-gray-400 mt-2">Designing and optimizing databases for high performance.</p>
        </motion.div>

        <motion.div className="p-6 bg-black rounded-lg shadow-md border border-gray-700"
          whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold text-primary">Data Security</h3>
          <p className="text-gray-400 mt-2">Implementing best practices for secure applications.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
