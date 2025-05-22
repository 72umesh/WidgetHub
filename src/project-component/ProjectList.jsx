import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../constants/projects";
import FilterProjects from "./FilterProjects";

import { motion } from "framer-motion";

function ProjectList({ searchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    document.body.style.background = " #020312";
  }, []);
  return (
    <div className="projects-container">
      <FilterProjects
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projects
          .filter((project) =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((project) =>
            selectedCategory === "All"
              ? true
              : project.category === selectedCategory
          )
          .map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="project-card-image">
                <img src={project.preview} alt={project.name} loading="lazy" />
                <div className="project-card-image-overlay"></div>
              </div>

              <div className="project-card-descriptions">
                <h3>{project.name}</h3>

                <p className="project-description">{project.description}</p>

                <Link to={project.route} className="view-project">
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
export default ProjectList;
