import { motion } from "framer-motion";

const Skills = () => (
  <motion.section
    id="skills"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>Technical Skills</h2>

    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.12 }
        }
      }}
    >
      {[
        "Languages: C, C++, Python, Java, JavaScript, R",
        "Frameworks: React, Node.js, Express.js, Spring Boot",
        "AI/ML: LLMs, YOLO, SSD, EfficientNet, OpenAI, Gemini",
        "Databases: MySQL, MongoDB",
        "Tools: Git, Streamlit, OpenCV, Jupyter, Visual Studio"
      ].map((skill, i) => (
        <motion.li
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  </motion.section>
);

export default Skills;
