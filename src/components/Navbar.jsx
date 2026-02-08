import { motion } from "framer-motion";
import "./Navbar.css";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">Aryan</div>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={item.link}>{item.name}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
