import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  return (
    <motion.div
      className="experience"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Experience</h2>

      <div className="exp-card">
        <h3>International Sales Specialist (Intern)</h3>
        <span>CodeYoung | Sep 2025 – Nov 2025</span>
        <ul>
          <li>Pitched coding and academic courses to US & Canada B2C clients</li>
          <li>Handled objections and closed deals using tailored solutions</li>
          <li>Built confidence in consultative sales and communication</li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>Graduate Trainee (.NET)</h3>
        <span>LTIMindtree | May 2025 – Jun 2025</span>
        <ul>
          <li>Worked with C#, ADO.NET, Collections, and .NET frameworks</li>
          <li>Strengthened backend and database fundamentals</li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>SDE Virtual Internship</h3>
        <span>Walmart | Jul 2025</span>
        <ul>
          <li>Solved DSA problems and designed UML diagrams</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
