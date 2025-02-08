import { motion } from "framer-motion";

const projects = [
  { title: "CRM System", desc: "Built with Laravel & React" },
  { title: "E-Commerce App", desc: "Built with Next.js & Firebase" },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
