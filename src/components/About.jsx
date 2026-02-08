import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I am a Computer Science graduate from KIIT University with a strong
        interest in software development, AI/ML, and Generative AI. I enjoy
        building scalable applications, experimenting with modern technologies,
        and solving real-world problems through clean and efficient code.
      </p>
    </motion.div>
  );
};

export default About;
