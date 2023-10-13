import { FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation, navItems } from "@constants";

const AboutSearchers: FC = () => {
  return (
    <motion.div key={navItems[2]} {...fastExitAnimation}>
      {navItems[2]}
    </motion.div>
  );
};

export default AboutSearchers;
