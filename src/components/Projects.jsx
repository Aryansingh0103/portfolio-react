import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Generative AI Applications Suite",
    description:
      "Built and deployed end-to-end Generative AI apps for text generation, summarization, classification, image synthesis, and code generation using LLMs.",
    tech: "Gemini, OpenAI, Groq, Hugging Face, Streamlit, FastAPI",
    github: "https://github.com/Aryansingh0103/GenAIProject",
  },
  {
    title: "Smart Traffic Management System",
    description:
      "Real-time pothole detection, traffic density classification, and vehicle detection using deep learning models.",
    tech: "Python, SSD, EfficientNet, PyTorch, OpenCV",
    github: "https://github.com/Aryansingh0103/JKT-Smart-Traffic-System-main",
  },
  {
    title: "Adaptive Traffic Signal Control System",
    description:
      "YOLO-based traffic object detection with dynamic signal optimization for reduced congestion.",
    tech: "YOLO, TensorFlow, OpenCV, Python",
    github: "https://github.com/Aryansingh0103/Adaptive-Traffic-Signal-Control-System-master",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
