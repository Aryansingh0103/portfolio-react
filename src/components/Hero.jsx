import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="hero">
      <motion.img
        src={profile}
        alt="Aryan Singh"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1>Aryan Singh</h1>
        <h3>BTech CSE | AI • Full Stack • GenAI</h3>
        <p>
          Software Developer passionate about AI, scalable systems,
          and real-world problem solving.
        </p>

        <a href={resume} download className="btn">
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
