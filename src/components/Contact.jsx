import { motion } from "framer-motion";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact</h2>

      <p>Email: aryansinghg4@gmail.com</p>
      <p>Phone: +91-9835621683</p>

      <div className="social-links">
        <a href="https://github.com/Aryansingh0103" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/aryan-157079253" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
