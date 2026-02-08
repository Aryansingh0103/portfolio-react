import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>About Me</h2>
    <p>
      I am a Computer Science graduate from KIIT University with strong
      experience in Generative AI, backend systems, and full-stack
      development. I enjoy building scalable, real-world solutions and
      explaining complex ideas clearly.
    </p>
  </motion.section>
);

export default About;
