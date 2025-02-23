import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 shadow-lg rounded-lg transition-all border hover:border-accent"
    >
      <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
      <p className="text-secondary">{project.description}</p>
      <Link className="text-accent mt-2 inline-block" to={`/projects/${project._id}`}>
        View Details →
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
