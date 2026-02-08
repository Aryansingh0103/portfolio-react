import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="footer-text">
        © {new Date().getFullYear()} Aryan Singh. All rights reserved.
      </p>

      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/aryan-singh-157079253"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/aryansingh0103"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
