import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        <div>
          <h4>Languages</h4>
          <p>C/C++, Python, Java, JavaScript, R, HTML, CSS</p>
        </div>

        <div>
          <h4>Frameworks</h4>
          <p>React, Node.js, Express.js, Spring Boot, GenAI</p>
        </div>

        <div>
          <h4>Databases</h4>
          <p>MySQL, MongoDB</p>
        </div>

        <div>
          <h4>Tools</h4>
          <p>Git, Jupyter, Streamlit, OpenCV, TorchVision, VS Code</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
