import { FC } from "react";
import { motion } from "framer-motion";
import { fastExitAnimation, navItems } from "@constants";

const AboutTeam: FC = () => {
  return (
    <motion.div key={navItems[4]} {...fastExitAnimation}>
      {navItems[4]}
    </motion.div>
  );
};

export default AboutTeam;
