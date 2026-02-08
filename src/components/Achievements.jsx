import { motion } from "framer-motion";
import "./Achievements.css";

const Achievements = () => {
  return (
    <motion.div
      className="achievements"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Achievements</h2>

      <ul>
        <li>2nd Prize – Nukkad Natak (AIDS Awareness), BJB College</li>
        <li>500+ DSA problems solved (LeetCode & GFG)</li>
        <li>Active contributor to AI & ML projects</li>
      </ul>
    </motion.div>
  );
};

export default Achievements;
